import React from 'react';

const skillsData = [
  { skill: 'Cloud Services', details: 'AWS, Azure, Google Cloud' },
  { skill: 'CI/CD Tools', details: 'Jenkins, GitLab CI, CircleCI' },
  { skill: 'Containerization', details: 'Docker, Kubernetes' },
  { skill: 'Scripting Languages', details: 'Python, Bash, PowerShell' },
  { skill: 'Infrastructure as Code', details: 'Terraform, Ansible' },
  { skill: 'Monitoring Tools', details: 'Prometheus, Grafana, ELK Stack' },
  { skill: 'Version Control', details: 'Git, GitHub, Bitbucket' },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Skills</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technical Skills</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Here are some of the technical skills I have acquired in my journey as a DevOps Engineer.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillsData.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg shadow-md">
                <h3 className="font-bold">{item.skill}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;