import React from "react";
import ComparisonView from "@/components/ComparisonView";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white p-4 shadow">
        <h1 className="text-center text-2xl font-bold text-primary">Fashion Compare</h1>
      </header>
      <main className="container mx-auto py-6">
        <ComparisonView />
      </main>
    </div>
  );
};

export default Index;