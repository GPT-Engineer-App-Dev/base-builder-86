import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Index = () => {
  const [helloCount, setHelloCount] = useState(0);

  const sayHello = () => {
    setHelloCount(helloCount + 1);
  };

  const getResponse = () => {
    if (helloCount === 0) return "Say hello!";
    if (helloCount === 1) return "Hello to you too!";
    if (helloCount === 2) return "Hello again!";
    if (helloCount === 3) return "You sure like saying hello!";
    return "Okay, I get it. You're very friendly!";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>The Hello Counter</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">{getResponse()}</p>
          <p className="text-sm text-gray-500 mb-4">Hello count: {helloCount}</p>
          <Button onClick={sayHello}>Say Hello</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;