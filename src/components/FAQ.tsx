import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
    id: string;
    question: string;
    answer: string;
}

interface Faq1Props {
    heading?: string;
    items?: FaqItem[];
}
  
const Faq1 = ({
    heading = "Frequently asked questions",
    items = [
        {
            id: "faq-1",
            question: "What is CYP?",
            answer:
                "CYP is a platform that lets you create a stylish personal portfolio effortlessly, without coding skills. Just pick a template, add your info, and your portfolio is ready.",
        },
        {
            id: "faq-2",
            question: "Do I need coding experience to use CYP?",
            answer:
                "Nope! CYP is designed for everyone. You can fully build and customize your portfolio without writing a single line of code.",
        },
        {
            id: "faq-3",
            question: "Are there free templates available?",
            answer:
                "Absolutely. CYP offers both free and premium templates, so you can start building without paying anything.",
        },
        {
            id: "faq-4",
            question: "Can I update my portfolio after publishing?",
            answer:
                "Yes! CYP allows you to update your content anytime. Changes are reflected immediately on your live site.",
        },
        {
            id: "faq-5",
            question: "Can I showcase projects and media?",
            answer:
                "Of course! CYP lets you add projects, images, videos, and even links to your social media or GitHub for a complete portfolio.",
        },
        {
            id: "faq-6",
            question: "Can I customize the design of my template?",
            answer:
                "Yes! You can tweak colors, fonts, layouts, and sections to make your portfolio truly yours.",
        },
        {
            id: "faq-7",
            question: "Does CYP work on mobile devices?",
            answer:
                "Absolutely. All CYP templates are fully responsive and look great on smartphones, tablets, and desktops.",
        },
        {
            id: "faq-8",
            question: "How quickly can I publish my portfolio?",
            answer:
                "You can have your portfolio live in just a few minutes once you’ve added your content and chosen a template.",
        },
        {
            id: "faq-9",
            question: "Can I connect my social media accounts?",
            answer:
                "Yes! CYP allows you to add links to your social media profiles, GitHub, LinkedIn, and more, making it easy for visitors to connect with you.",
        },
    ]
}: Faq1Props) => {
    return (
      <div>
        <h1 className="mb-4 font-poppins text-3xl font-semibold md:mb-11 md:text-4xl text-white">
          {heading}
        </h1>
        <div className="px-[32px] py-[24px] bg-white rounded-[40px]">
            <Accordion type="single" collapsible>
            {items.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="sm:text-[1.125rem] font-semibold hover:no-underline text-primary font-google-sans-flex">
                    {item.question}
                </AccordionTrigger>
                <AccordionContent className="sm:text-[0.938rem] font-montserrat text-primary/90 font-medium">
                    {item.answer}
                </AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </div>
      </div>
    );
};
  
export { Faq1 };