import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Frequently Asked Questions"
    description="FAQ on Automation and AI."
  >
    <VerticalFeatureRow
      title="What are the key benefits of automating Esker invoice processing?"
      description="The combination of invoice processing solutions like Esker and Python automation offers several key benefits. These include optimizing efficiency by eliminating manual data entry through autonomous browser interactions and intelligent automation frameworks.
Accuracy is improved through advanced data pre-processing, validation mechanisms, and context-aware understanding of the user interface. Scalability is achieved through iterative batch processing of multiple invoices."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="User Review 1"
      description="A top-notch business process automation that’ll save you time and effort in the long run. The documentation is incredibly comprehensive with detailed explanations.
It has achieved significant cost savings and greatly increased productivity by drastically reducing processing time per invoice. Ivy Chai
"
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="User Review 2"
      description="I’m thoroughly impressed with the ‘Esker pending payment documentation’ and automated process workflows. It’s an awesome process automation that’s saved me hours of manual work and allowed me to focus on value-added tasks.
Chloe Chong
      "
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
