"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const plans = [
    {
      name: "Free Plan",
      description: "Perfect for getting started",
      price: "$0",
      features: [
        "Boost engagement with target responses",
        "Automate comment replies to enhance audience interaction",
        "Turn followers into customers with targeted messaging",
      ],
      cta: "Get Started",
    },
    {
      name: "Smart AI Plan",
      description: "Advanced features for power users",
      price: "$99",
      features: [
        "All features from Free Plan",
        "AI-powered response generation",
        "Advanced analytics and insights",
        "Priority customer support",
        "Custom branding options",
      ],
      cta: "Upgrade Now",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 via-blue-900 to-bg overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 py-8">
          {/* Navbar */}
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">ManyChat</span>
            </Link>
            <nav className="hidden md:flex space-x-6 text-sm text-blue-200">
              <Link href="#features" className="hover:underline">Features</Link>
              <Link href="#pricing" className="hover:underline">Pricing</Link>
              <Link href="#about" className="hover:underline">About</Link>
            </nav>
            <Button className="bg-white text-black hover:bg-gray-200">
              <Link href="/dashboard" className="flex items-center justify-center w-full h-full">
                Login
              </Link>
            </Button>
          </div>

          {/* Hero Content */}
          <div className="mt-20 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              Transform Your Instagram Engagement with Slide
            </h1>
            <p className="mt-6 text-lg text-blue-200">
              Slide revolutionizes how you connect with your audience on Instagram.
              Automate responses and boost engagement effortlessly, turning interactions into valuable business opportunities.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                <Link href="/login" className="flex items-center justify-center w-full h-full">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-400 hover:bg-blue-900/50 text-white">
                <Link href="#features" className="flex items-center justify-center w-full h-full">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Choose Your Plan</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan to boost your Instagram engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, idx) => (
            <Card key={idx} className="flex flex-col justify-between">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="text-4xl font-bold">
                  {plan.price}
                  <span className="ml-1 text-lg font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">{plan.cta}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
