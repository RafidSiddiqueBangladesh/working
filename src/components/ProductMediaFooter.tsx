import { useEffect, useMemo, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon, Cuboid, ScanLine } from "lucide-react";

type Mode = "image" | "model" | "vr";

type ProductMediaFooterProps = {
  imageSrc?: string;
  modelSrc?: string; // glb/gltf
  title?: string;
  description?: string;
};

const DEFAULT_IMAGE = "https://picsum.photos/seed/product/900/600";
const DEFAULT_MODEL = "https://modelviewer.dev/shared-assets/models/Astronaut.glb";

export const ProductMediaFooter = ({
  imageSrc = DEFAULT_IMAGE,
  modelSrc = DEFAULT_MODEL,
  title = "Sample Product",
  description = "A concise product description that highlights key features, materials, and benefits.",
}: ProductMediaFooterProps) => {
  const [mode, setMode] = useState<Mode>("image");
  const [imgKey, setImgKey] = useState<number>(0);
  const mvRef = useRef<any>(null);
  const [vrSupported, setVrSupported] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const checkVR = async () => {
      try {
        // Basic WebXR support check for immersive-vr
        // If supported, we allow VR button; otherwise we will fallback to 3D
        const xr = (navigator as any).xr;
        if (xr && xr.isSessionSupported) {
          const supported = await xr.isSessionSupported("immersive-vr");
          setVrSupported(!!supported);
        } else {
          setVrSupported(false);
        }
      } catch {
        setVrSupported(false);
      }
    };
    checkVR();
  }, []);

  const handleImage = () => {
    setMode("image");
    // Force reload to reflect latest asset if cached
    setImgKey((k) => k + 1);
    setMessage("");
  };

  const handleModel = () => {
    setMode("model");
    setMessage("");
  };

  const handleVR = () => {
    if (vrSupported) {
      // We don't have a full VR scene wired; gracefully fall back to 3D view
      // while indicating VR capability is present
      setMode("model");
      setMessage("VR available on this device. Showing 3D viewer due to limited integration.");
    } else {
      setMode("model");
      setMessage("VR not available on this device. Showing 3D viewer.");
    }
  };

  const handleAR = () => {
    // model-viewer exposes activateAR() for supported browsers
    try {
      setMode("model");
      setMessage("");
      // activate AR if possible
      mvRef.current?.activateAR?.();
    } catch {
      setMessage("AR not supported on this device/browser.");
    }
  };

  const viewer = useMemo(() => {
    if (mode === "image") {
      const src = `${imageSrc}${imageSrc.includes("?") ? "&" : "?"}t=${imgKey}`;
      return (
        <img
          key={imgKey}
          src={src}
          alt={title}
          className="w-full h-[360px] object-cover rounded-lg"
        />
      );
    }
    // 3D viewer via model-viewer
    return (
      // @ts-ignore - model-viewer is a web component
      <model-viewer
        ref={mvRef}
        src={modelSrc}
        alt={title}
        camera-controls
        ar
        ar-modes="webxr scene-viewer quick-look"
        tone-mapping="neutral"
        shadow-intensity="1"
        style={{ width: "100%", height: "360px", borderRadius: "0.5rem" }}
      />
    );
  }, [mode, imageSrc, modelSrc, title, imgKey]);

  return (
    <footer className="mt-6">
      <Card className="p-4 shadow-card">
        {/* Description under product */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Button variant={mode === "image" ? "default" : "outline"} onClick={handleImage}>
            <ImageIcon className="h-4 w-4 mr-1" /> Pic
          </Button>
          <Button variant={mode === "model" ? "default" : "outline"} onClick={handleModel}>
            <Cuboid className="h-4 w-4 mr-1" /> 3D
          </Button>
          <Button variant={"outline"} onClick={handleAR}>
            <ScanLine className="h-4 w-4 mr-1" /> AR
          </Button>
          <Button variant={"outline"} onClick={handleVR}>
            <Cuboid className="h-4 w-4 mr-1" /> VR
          </Button>
        </div>

        {/* Viewer */}
        <div>{viewer}</div>

        {message && (
          <p className="mt-3 text-xs text-muted-foreground">{message}</p>
        )}
      </Card>
    </footer>
  );
};

export default ProductMediaFooter;