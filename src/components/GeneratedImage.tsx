import { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

export default function GeneratedImage({ prompt, alt, className }: { prompt: string, alt: string, className?: string }) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function generateImage() {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        });

        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            const base64EncodeString = part.inlineData.data;
            setImageUrl(`data:image/png;base64,${base64EncodeString}`);
            break;
          }
        }
      } catch (err: any) {
        console.error("Error generating image:", err);
        setError(err.message || "Failed to generate image");
      } finally {
        setLoading(false);
      }
    }

    generateImage();
  }, [prompt]);

  if (loading) {
    return (
      <div className={`flex items-center justify-center bg-gray-200 animate-pulse ${className}`}>
        <span className="text-gray-500 font-medium">Generating image...</span>
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <div className={`flex items-center justify-center bg-gray-200 ${className}`}>
        <span className="text-red-500 font-medium text-center p-4">Failed to generate image<br/><span className="text-sm opacity-70">{error}</span></span>
      </div>
    );
  }

  return (
    <img 
      src={imageUrl} 
      alt={alt} 
      className={className}
      referrerPolicy="no-referrer"
    />
  );
}
