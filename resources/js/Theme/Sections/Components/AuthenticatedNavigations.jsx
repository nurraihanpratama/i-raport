import { Fragment } from 'react'
import NavLink from '@/Theme/Components/NavLink/NavLink'
import NavLinkTree from '@/Theme/Components/NavLink/NavLinkTree'
import { FaBook, FaDoorOpen, FaUserTie } from 'react-icons/fa'
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoCalendar, IoCalendarOutline } from "react-icons/io5";
import { FaUserGraduate } from 'react-icons/fa6';



export default function AuthenticatedNavigations({ user }) {
  const role = user.role
  return (
    <Fragment>

      {/* GURU */}
      <NavLink
        navRoute={route('teacher.index', role)}
        components={['teacher.index']}
        label="Daftar Guru"
        icon={<FaUserTie />}
      />

      {/* TAHUN PELAJARAN */}
      <NavLink
        navRoute={route('tapel.index', role)}
        components={['tapel.index']}
        label="Daftar Tahun Ajaran"
        icon={<IoCalendar />}
      />

      {/* MATA PELAJARAN */}
      <NavLink
        navRoute={route('subject.index', role)}
        components={['subject.index']}
        label="Daftar Mata Pelajaran"
        icon={<FaBook />}
      />

      {/* KELAS */}
      <NavLink
        navRoute={route('classroom.index', role)}
        components={['classroom.index']}
        label="Daftar Kelas"
        icon={<HiOutlineOfficeBuilding />}
      />

      {/* KELAS */}
      <NavLink
        navRoute={route('student.index', role)}
        components={['student.index']}
        label="Daftar Peserta Didik"
        icon={<FaUserGraduate />}
      />



      
      {/* LOGOUT */}
      <NavLink
        navRoute={route('logout')}
        components={['logout']}
        label="Logout"
        method="post"
        as="button"
        icon={<FaDoorOpen />}
      />
    </Fragment>
  )
}
