import { InstagramDuoToneBlue, SalesForceDuoToneBlue } from "@/icons";

type Props = {
  title: string;
  icon: React.ReactNode;
  description: string;
  strategy: "INSTAGRAM" | "CRM";
};

export const INTEGRATION_CARDS: Props[] = [
  {
    title: "Connect Instagram",
    description:
      "Automate your Instagram DMs and comments! Instantly send PDFs, images, and resources to engaged users based on keywords.",
    icon: <InstagramDuoToneBlue />,
    strategy: "INSTAGRAM",
  },
  // {
  //   title: 'Connect Facebook',
  //   description:
  //     'Seamlessly integrate with Facebook to auto-respond to comments and messages, delivering valuable content to your audience.',
  //   icon: <InstagramDuoToneBlue />,
  //   strategy: 'FACEBOOK',
  // },
];
