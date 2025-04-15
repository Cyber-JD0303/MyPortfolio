import React from 'react';

const projects = [
  {
    title: 'Infrastructure as Code with Terraform',
    description: 'Implemented infrastructure provisioning using Terraform, automating the deployment of cloud resources.',
    technologies: ['Terraform', 'AWS', 'GitHub Actions'],
  },
  {
    title: 'CI/CD Pipeline for Microservices',
    description: 'Developed a CI/CD pipeline using Jenkins and Docker for a microservices architecture, improving deployment efficiency.',
    technologies: ['Jenkins', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Monitoring and Logging with ELK Stack',
    description: 'Set up an ELK stack for centralized logging and monitoring, enhancing system observability and troubleshooting.',
    technologies: ['Elasticsearch', 'Logstash', 'Kibana'],
  },
  {
    title: 'Automated Backup Solutions',
    description: 'Created automated backup solutions for critical data using AWS S3 and Lambda functions, ensuring data integrity.',
    technologies: ['AWS S3', 'AWS Lambda', 'Python'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Projects</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key DevOps Projects</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Showcasing my experience and projects in the DevOps domain.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="p-6 flex flex-col gap-4 h-full bg-white rounded-lg shadow-md dark:bg-gray-800">
              <h3 className="font-bold">{project.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;