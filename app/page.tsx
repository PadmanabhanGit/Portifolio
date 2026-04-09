"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Heart Disease Prediction",
      desc: "Compared K-Means and Logistic Regression to predict heart disease with >85% accuracy.",
      tech: ["Python", "Scikit-learn", "Pandas"],
      github: "https://github.com/PadmanabhanGit",
    },
    {
      title: "Weather Prediction System",
      desc: "Built classification + regression models for weather forecasting with low RMSE.",
      tech: ["ML", "Regression", "EDA"],
      github: "https://github.com/PadmanabhanGit",
    },
    {
      title: "Brain Tumor Analysis",
      desc: "Compared KNN, SVM, and CNN models for tumor detection accuracy.",
      tech: ["CNN", "OpenCV", "ML"],
      github: "https://github.com/PadmanabhanGit",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold">Padmanabhan S</h1>
        <p className="text-lg mt-3 text-gray-600">
          Software Engineer | AI & ML Enthusiast
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/PadmanabhanGit" target="_blank">
            <Github className="hover:scale-110 transition" />
          </a>
          <a href="https://www.linkedin.com/in/padmanabhan-s-544b80277/" target="_blank">
            <Linkedin className="hover:scale-110 transition" />
          </a>
          <a href="mailto:padmanabhan.09k@gmail.com">
            <Mail className="hover:scale-110 transition" />
          </a>
        </div>
      </motion.div>

      {/* About */}
      <section className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          I am a Software Engineer and AI enthusiast with hands-on experience in Machine Learning,
          Computer Vision, and Data Analysis. I specialize in building intelligent systems using Python,
          Java, and modern ML frameworks. Passionate about solving real-world problems with scalable solutions.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Java",
            "Python",
            "SQL",
            "TensorFlow",
            "Scikit-learn",
            "OpenCV",
            "Machine Learning",
            "Computer Vision",
          ].map((skill, i) => (
            <Badge key={i} className="px-4 py-2 text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="rounded-2xl shadow-lg hover:shadow-xl transition">
                <CardContent className="p-6 flex flex-col gap-4">
                  <h3 className="text-xl font-bold">{proj.title}</h3>
                  <p className="text-gray-600 text-sm">{proj.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((t, idx) => (
                      <Badge key={idx} variant="secondary">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-2">
                    <a href={proj.github} target="_blank">
                      <Button size="sm" variant="outline">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Button>
                    </a>
                    <Button size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="text-center mb-10">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-600">
          Open to internships, full-time roles, and collaborations.
        </p>
        <a href="mailto:padmanabhan.09k@gmail.com">
          <Button className="mt-4 px-6">Get In Touch</Button>
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Padmanabhan S. Built with React.
      </footer>
    </div>
  );
}"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Heart Disease Prediction",
      desc: "Compared K-Means and Logistic Regression to predict heart disease with >85% accuracy.",
      tech: ["Python", "Scikit-learn", "Pandas"],
      github: "https://github.com/PadmanabhanGit",
    },
    {
      title: "Weather Prediction System",
      desc: "Built classification + regression models for weather forecasting with low RMSE.",
      tech: ["ML", "Regression", "EDA"],
      github: "https://github.com/PadmanabhanGit",
    },
    {
      title: "Brain Tumor Analysis",
      desc: "Compared KNN, SVM, and CNN models for tumor detection accuracy.",
      tech: ["CNN", "OpenCV", "ML"],
      github: "https://github.com/PadmanabhanGit",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold">Padmanabhan S</h1>
        <p className="text-lg mt-3 text-gray-600">
          Software Engineer | AI & ML Enthusiast
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/PadmanabhanGit" target="_blank">
            <Github className="hover:scale-110 transition" />
          </a>
          <a href="https://www.linkedin.com/in/padmanabhan-s-544b80277/" target="_blank">
            <Linkedin className="hover:scale-110 transition" />
          </a>
          <a href="mailto:padmanabhan.09k@gmail.com">
            <Mail className="hover:scale-110 transition" />
          </a>
        </div>
      </motion.div>

      {/* About */}
      <section className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          I am a Software Engineer and AI enthusiast with hands-on experience in Machine Learning,
          Computer Vision, and Data Analysis. I specialize in building intelligent systems using Python,
          Java, and modern ML frameworks. Passionate about solving real-world problems with scalable solutions.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Java",
            "Python",
            "SQL",
            "TensorFlow",
            "Scikit-learn",
            "OpenCV",
            "Machine Learning",
            "Computer Vision",
          ].map((skill, i) => (
            <Badge key={i} className="px-4 py-2 text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="rounded-2xl shadow-lg hover:shadow-xl transition">
                <CardContent className="p-6 flex flex-col gap-4">
                  <h3 className="text-xl font-bold">{proj.title}</h3>
                  <p className="text-gray-600 text-sm">{proj.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((t, idx) => (
                      <Badge key={idx} variant="secondary">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-2">
                    <a href={proj.github} target="_blank">
                      <Button size="sm" variant="outline">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Button>
                    </a>
                    <Button size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="text-center mb-10">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-600">
          Open to internships, full-time roles, and collaborations.
        </p>
        <a href="mailto:padmanabhan.09k@gmail.com">
          <Button className="mt-4 px-6">Get In Touch</Button>
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Padmanabhan S. Built with React.
      </footer>
    </div>
  );
}