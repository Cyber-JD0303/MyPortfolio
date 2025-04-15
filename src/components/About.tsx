import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">About Me</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Background</h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I am a DevOps Engineer with a strong background in system administration and cloud technologies. With over 3 years of experience in managing CI/CD pipelines, automating infrastructure, and ensuring system reliability, I am passionate about optimizing development workflows and enhancing operational efficiency.
            </p>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              My expertise includes working with various cloud platforms, containerization technologies, and configuration management tools. I thrive in collaborative environments and enjoy tackling complex challenges to deliver high-quality solutions.
            </p>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Based in Surat, Gujarat, I am currently pursuing my MSc in Cyber Security & Cyber Forensics at Parul University, further expanding my knowledge in security practices relevant to DevOps.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Core Competencies</h3>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>Continuous Integration and Continuous Deployment (CI/CD)</li>
              <li>Infrastructure as Code (IaC) using Terraform and CloudFormation</li>
              <li>Containerization with Docker and orchestration with Kubernetes</li>
              <li>Monitoring and logging using tools like Prometheus and Grafana</li>
              <li>Version control with Git and collaboration on GitHub</li>
              <li>Cloud services including AWS, Azure, and Google Cloud Platform</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;