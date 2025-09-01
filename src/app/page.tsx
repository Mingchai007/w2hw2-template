import Nav from '@/components/Nav'

export default function Home() {
  const profile = {
    name: 'ภานุพงศ์ มิ่งชัย',
    nickname: 'มังกร',
    title: 'Front-end Developer',
    summary:
      'Front-end Developer (Freelance) ประสบการณ์ 5 ปี แปลง Figma เป็นโค้ดพร้อมใช้งาน เน้น Responsive, UX และคุณภาพโค้ดเชี่ยวชาญ React/Next.js, Vue/Nuxt, TypeScript, Tailwind พร้อมเชื่อมต่อ API ระดับพื้นฐาน/ใช้ mock ระหว่างพัฒนา',
  }

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Vue.js' , 'Nuxt.js'
  ]

  const projects = [
    { title: 'What City FiveM E-Commerce (Front-end)', desc: 'Next.js, Tailwind · Responsive UI, โครงสร้าง component ที่นำกลับมาใช้ซ้ำ ', link: 'https://universal.whatcityth.com/' },
    { title: 'E-Commerce Dashboard (Analytics) | Front-end', desc: 'ออกแบบและพัฒนา Dashboard แสดงยอดขาย/สต๊อก/คำสั่งซื้อ แบบ Responsive พร้อม component ที่นำกลับมาใช้ซ้ำได้', link: '#' },
    { title: 'Singer Tracking Backoffice (Front-end)', desc: 'Nuxt.js, TypeScript, Tailwind · หน้าจัดการข้อมูล (ตาราง/ค้นหา/กรอง/อัปเดตสถานะ) · โครงการภายในองค์กร', link: '#' },
  ]

  return (
    <>
      <Nav />
      <main className="bg-gray-950">
        <section id="home" className="py-20">
          <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
            <div>
              <h1 className="mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl">{profile.name}</h1>
              <p className="mb-2 text-gray-400">ชื่อเล่น: <strong className="text-gray-200">{profile.nickname}</strong></p>
              <p className="mb-4 text-lg font-medium text-indigo-400">{profile.title}</p>
              <p className="mb-6 max-w-prose text-gray-400 leading-relaxed">{profile.summary}</p>
              <div className="flex gap-4">
                <a href="#projects" className="rounded-lg bg-indigo-600 px-5 py-2.5 font-medium text-white transition-all hover:bg-indigo-500">ดูผลงาน</a>
                <a href="#contact" className="rounded-lg border border-gray-900 px-5 py-2.5 font-medium text-gray-300 transition-all hover:bg-gray-800">ติดต่อฉัน</a>
              </div>
            </div>
            <div className="md:justify-self-end">
              <img
                src="https://cdn.discordapp.com/attachments/753727229170679948/1408762060220792973/image.png?ex=68b6c8e8&is=68b57768&hm=2d8f54d060672dc27a98f6804405103fc1a80b644fecdbc2ba9a669ddf4c43e4&"
                alt={`โปรไฟล์ของ ${profile.name}`}
                className="h-72 w-72 rounded-xl border border-gray-900 object-cover shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
        </section>

        <section id="skills" className="border-t border-gray-900 py-20 bg-black/30">
          <div className="mx-auto w-full max-w-5xl px-4">
            <h2 className="mb-6 text-3xl font-semibold text-white">Skills</h2>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {skills.map((s) => (
                <li key={s} className="rounded-full border border-gray-800 bg-gray-900 px-4 py-1.5 text-sm font-medium text-gray-200">{s}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="projects" className="border-t border-gray-900 py-20">
          <div className="mx-auto w-full max-w-5xl px-4">
            <h2 className="mb-6 text-3xl font-semibold text-white">Projects</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
              {projects.map((project) => (
                <a 
                  key={project.title} 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-gray-900 bg-black/20 p-6 transition-all hover:border-gray-800 hover:bg-gray-900"
                >
                  <h3 className="mb-2 text-lg font-medium text-white">{project.title}</h3>
                  <p className="text-gray-400">{project.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-gray-900 py-20 bg-black/30">
          <div className="mx-auto w-full max-w-5xl px-4">
            <h2 className="mb-6 text-3xl font-semibold text-white">Contact</h2>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:email@example.com" className="flex items-center gap-2.5 rounded-lg border border-gray-900 bg-black/20 px-5 py-3 transition-all hover:border-gray-800 hover:bg-gray-900">
                <span className="text-gray-300">phanuphong.ming@bumail.net</span>
              </a>
              <a href="https://github.com/Mingchai007" className="flex items-center gap-2.5 rounded-lg border border-gray-900 bg-black/20 px-5 py-3 transition-all hover:border-gray-800 hover:bg-gray-900">
                <span className="text-gray-300">GitHub</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}