import dynamic from 'next/dynamic';

const DrawingComponent = dynamic(() => import('../../../_components/drawing'), {
  ssr: false
});


const BlueprintDrawing: React.FC = () => {
  return (
    <DrawingComponent />
  );
}

export default BlueprintDrawing
