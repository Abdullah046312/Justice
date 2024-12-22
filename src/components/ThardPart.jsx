import React, { useState } from 'react';
import Container from './Container';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import images8 from "../assets/images8.png";

const ThardPart = () => {
  // State to keep track of which questions are open
  const [openQuestion, setOpenQuestion] = useState(null);

  // Array of questions and answers
  const faqData = [
    {
      question: "What is your service about?",
      answer: "Our service provides legal advice to individuals and businesses, helping navigate complex legal issues.",
    },
    {
      question: "How do I contact customer support?",
      answer: "You can contact customer support via email or our contact form on the website.",
    },
    {
      question: "What are your service fees?",
      answer: "Our fees depend on the type of service you need. We offer competitive pricing and provide a quote based on your needs.",
    },
    {
      question: "Are application fee waivers available?",
      answer: "Yes, we offer application fee waivers under certain conditions. Please contact support for more details.",
    },
    {
      question: "How long does it take to process my application?",
      answer: "Processing time depends on the complexity of the application, but typically takes 1-2 weeks.",
    },
    {
      question: "Can I track the status of my application?",
      answer: "Yes, once your application is submitted, you will receive an email with a link to track its status.",
    },
  ];

  // Toggle function to open and close answers
  const toggleAnswer = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="py-20">
      <Container>
      <div className="w-full sm:w-[50%] text-center mx-auto">
          <h2 className='text-[40px] text-[#262626] font-EB_Garamond font-extrabold'>
            What Our Client Say
          </h2>
          <p className='text-[16px] text-[#707070] font-normal font-DMs'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-20">
          {/* FAQ List */}
          <div className="w-full sm:w-[50%] space-y-5">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b py-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                  aria-expanded={openQuestion === index ? "true" : "false"}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-[24px] font-EB_Garamond font-bold text-[#262626]">{faq.question}</h3>
                  {openQuestion === index ? (
                    <FaChevronUp className="text-[#B68C5A]" />
                  ) : (
                    <FaChevronDown className="text-[#B68C5A]" />
                  )}
                </div>
                {openQuestion === index && (
                  <p
                    id={`faq-answer-${index}`}
                    className="text-[18px] font-DMs text-[#707070] font-normal mt-4"
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="w-full sm:w-[40%] flex justify-center">
            <img className="w-full sm:w-[100%]" src={images8} alt="FAQ illustration" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ThardPart;
