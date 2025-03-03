import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

// Define the team members data
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Evan",
    role: "CEO & Founder",
    bio: "Evan is the visionary behind Multibox Labs, bringing new products and ideas to life.",
    imageUrl: "/team/iamEvan.png"
  }
];

export const Route = createFileRoute("/team")({
  component: TeamPage
});

export default function TeamPage() {
  return (
    <div className="flex flex-col items-center justify-start pt-2 py-16 px-4 overflow-hidden relative">
      <div className="relative z-10 flex flex-col items-center mb-10">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 mb-4"
        >
          Our Team
        </motion.h1>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center text-gray-300 max-w-lg"
        >
          <p className="text-lg">Meet the talented individuals behind Multibox Labs.</p>
          <p className="text-lg font-light">Passionate about building innovative products that solve real problems.</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl relative z-10 [&>*:last-child:nth-child(2n+1)]:md:col-span-2 [&>*:last-child:nth-child(2n+1)]:md:mx-auto [&>*:last-child:nth-child(2n+1)]:md:max-w-md">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={member.name} member={member} index={index} />
        ))}
      </div>
    </div>
  );
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-xl shadow-purple-900/20 flex flex-col"
    >
      <div className="flex mb-4 items-center">
        <div className="mr-4 relative">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-400">
            <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{member.name}</h3>
          <p className="text-purple-400">{member.role}</p>
        </div>
      </div>
      <p className="text-gray-300 text-sm">{member.bio}</p>
    </motion.div>
  );
}
