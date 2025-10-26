import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon, Cuboid, Eye, ScanLine } from "lucide-react";

type Mode = "image" | "model";

type ProductMediaInlineProps = {
  imageSrc?: string;
  modelSrc?: string; // glb/gltf
  heightClass?: string; // optional fixed height (e.g., "h-48")
  seed?: string; // optional picsum seed for placeholder images
};

const DEFAULT_IMAGE = "https://picsum.photos/seed/product-inline/600/600";
const DEFAULT_MODEL = "https://modelviewer.dev/shared-assets/models/Astronaut.glb";

const ProductMediaInline = ({
  imageSrc,
  modelSrc = DEFAULT_MODEL,
  heightClass = "h-48 sm:h-56 md:h-64",
  seed,
}: ProductMediaInlineProps) => {
  const [mode, setMode] = useState<Mode>("image");
  const mvRef = useRef<any>(null);
  const [vrSupported, setVrSupported] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  // Resolve image source with backward-compatible seed support
  const resolvedImageSrc = imageSrc || (seed ? `https://picsum.photos/seed/${seed}/600/600` : DEFAULT_IMAGE);

  useEffect(() => {
    const checkVR = async () => {
      try {
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
    setMessage("");
  };

  const handleModel = () => {
    setMode("model");
    setMessage("");
  };

  const handleAR = () => {
    try {
      setMode("model");
      setMessage("");
      mvRef.current?.activateAR?.();
    } catch {
      setMessage("AR not supported on this device/browser.");
    }
  };

  const handleVR = () => {
    if (!vrSupported) {
      setMode("model");
      setMessage("VR not supported — showing 3D viewer.");
      return;
    }
    try {
      setMode("model");
      setMessage("");
      mvRef.current?.enterVR?.();
    } catch {
      setMessage("Unable to start VR session — showing 3D viewer.");
    }
  };

  const viewer =
    mode === "image" ? (
      <img src={resolvedImageSrc} alt="Product" className="w-full h-full object-cover" />
    ) : (
      // @ts-ignore - model-viewer is provided by external script
      <model-viewer
        ref={mvRef}
        src={modelSrc}
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        environment-image="neutral"
        style={{ width: "100%", height: "100%" }}
      ></model-viewer>
    );

  return (
    <div>
      <div className="flex items-center gap-2 p-2">
        <Button variant={mode === "image" ? "default" : "outline"} size="sm" onClick={handleImage}>
          <ImageIcon className="h-4 w-4 mr-1" /> Pic
        </Button>
        <Button variant={mode === "model" ? "default" : "outline"} size="sm" onClick={handleModel}>
          <Cuboid className="h-4 w-4 mr-1" /> 3D
        </Button>
        <Button variant="outline" size="sm" onClick={handleAR}>
          <ScanLine className="h-4 w-4 mr-1" /> AR
        </Button>
        <Button variant="outline" size="sm" onClick={handleVR}>
          <Eye className="h-4 w-4 mr-1" /> VR
        </Button>
      </div>

      <div className={`${heightClass} w-full overflow-hidden rounded-b-lg`}> 
        {viewer}
      </div>
      {message && <p className="mt-2 text-xs text-muted-foreground">{message}</p>}
    </div>
  );
};

export default ProductMediaInline;