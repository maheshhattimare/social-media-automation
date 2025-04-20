import { Button } from "@/components/ui/button";
import { PLANS } from "@/constants/pages";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import React from "react";

type Props = {
  label: string;
  current: "PRO" | "FREE";
  landing?: boolean;
};

const PaymentCard = ({ current, label, landing }: Props) => {
  return (
    <div
      className={cn(
        label !== current
          ? "border border-muted bg-background-90"
          : "border-2 border-indigo-500",
        "rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
      )}
    >
      <div
        className={cn(
          landing ? "bg-background" : "bg-background-90",
          "flex flex-col justify-between rounded-2xl px-6 py-6 h-full min-h-[400px]"
        )}
      >
        {/* Heading */}
        {landing ? (
          <h2 className="text-2xl font-bold mb-3 text-foreground">
            {label === "PRO" ? "Premium Plan" : "Standard Plan"}
          </h2>
        ) : (
          <h2 className="text-2xl font-bold mb-3 text-foreground">
            {label === current ? "Your Current Plan" : current === "PRO" ? "Downgrade" : "Upgrade"}
          </h2>
        )}

        {/* Subtext */}
        <p className="text-muted-foreground text-sm mb-4">
          Covers automations and AI features
        </p>

        {/* Plan Type */}
        {label === "PRO" ? (
          <span className="text-4xl font-extrabold text-indigo-500 mb-4">
            Smart AI
          </span>
        ) : (
          <p className="text-xl font-semibold text-muted-foreground mb-4">
            Standard
          </p>
        )}

        {/* Pricing */}
        {label === "PRO" ? (
          <p className="text-2xl font-bold mb-4 text-foreground">
            $99<span className="text-base font-medium">/month</span>
          </p>
        ) : (
          <p className="text-2xl font-bold mb-4 text-foreground">Free</p>
        )}

        {/* Features List */}
        <div className="flex flex-col gap-3 mb-6">
          {PLANS[label === "PRO" ? 1 : 0].features.map((i) => (
            <div key={i} className="flex items-center gap-3 text-muted-foreground text-sm">
              <CircleCheck className="text-indigo-500 w-5 h-5" />
              {i}
            </div>
          ))}
        </div>

        {/* Button */}
        {landing ? (
          <Button
            className={cn(
              "w-full rounded-full font-semibold text-base py-3",
              label === "PRO"
                ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                : "bg-muted text-foreground hover:bg-muted-foreground"
            )}
          >
            {label === current ? "Get Started" : current === "PRO" ? "Free" : "Get Started"}
          </Button>
        ) : (
          <Button
            className={cn(
              "w-full rounded-full font-semibold text-base py-3",
              label === current
                ? "bg-muted text-foreground"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            )}
            disabled={label === current}
          >
            {label === current ? "Active" : current === "PRO" ? "Downgrade" : "Upgrade"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default PaymentCard;
