import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Hello, World!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">Welcome to your new React application.</p>
          <Button>Click me!</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;