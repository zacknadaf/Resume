import { Briefcase, GraduationCap, Wrench, Code, Globe, MapPin, Mail, Phone, Linkedin } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-8">
          <h1 className="text-4xl font-bold">Zaheer Nadaf</h1>
          <p className="mt-2 text-xl font-light">Cybersecurity and Ethical Hacking Professional</p>
          <p className="mt-1 text-sm font-light">(Fresher)</p>
        </header>
        
        <main className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <section className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                A highly motivated and detail-oriented cybersecurity enthusiast with foundational knowledge in ethical hacking and network security. Passionate about safeguarding systems and data from cyber threats. Strong problem-solving skills and a keen interest in learning emerging cybersecurity technologies.
              </p>
            </section>
          
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-indigo-600">
                <Briefcase className="mr-2" size={24} /> Experience
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Self Experience</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Developed foundational knowledge in network security and vulnerability assessment during coursework.</li>
                  <li>Developed a foundational understanding of network security protocols and encryption techniques.</li>
                </ul>
              </div>
            </section>
          
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-indigo-600">
                <GraduationCap className="mr-2" size={24} /> Education
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-1">School</h3>
                  <p className="text-gray-700">10th MSBSHSE in Shree Balaji Madhyamik Vidyalay, Ich.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-1">College</h3>
                  <p className="text-gray-700">Diploma in Artificial Intelligence and Machine Learning</p>
                  <p className="text-gray-600">Sharad Institute Of Technology, Polytechnic.</p>
                </div>
              </div>
            </section>
          </div>
          
          <div>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-indigo-600">
                <Wrench className="mr-2" size={24} /> Tools
              </h2>
              <ul className="space-y-2 text-gray-700">
                {['Kali Linux', 'Metasploit Nmap', 'Wireshark', 'Burp Suite', 'OWASP ZAP', 'Nessus', 'Snort', 'Aircrack-ng'].map((tool, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    {tool}
                  </li>
                ))}
              </ul>
            </section>
          
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-indigo-600">
                <Code className="mr-2" size={24} /> Skills
              </h2>
              <ul className="space-y-2 text-gray-700">
                {['Penetration Testing', 'Vulnerability Assessment', 'Networking Security', 'Linux/Unix Systems', 'Problem-Solving Skills', 'Antivirus Tools', 'Firewalls', 'Cryptography Basics'].map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-indigo-600">
                <Globe className="mr-2" size={24} /> Languages
              </h2>
              <ul className="space-y-2 text-gray-700">
                {['English', 'Hindi'].map((language, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    {language}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
        
        <footer className="bg-gray-800 text-white p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <MapPin className="mr-2" size={18} />
              <p>Ichalkaranji, Kolhapur, MH</p>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2" size={18} />
              <p>zaheernadaf08@gmail.com</p>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2" size={18} />
              <p>+91 88559-44455</p>
            </div>
            <div className="flex items-center">
              <Linkedin className="mr-2" size={18} />
              <a href="https://www.linkedin.com/in/zaheer-nadaf/" className="hover:underline">linkedin.com/in/zaheer-nadaf</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

