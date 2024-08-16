import { Fragment, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import { BiPlus } from 'react-icons/bi'
import { usePage } from '@inertiajs/react'
import DataTable from '@/Theme/Components/DataTable/DataTable'
import PrimaryButton from '@/Theme/Components/Buttons/PrimaryButton'
import ClassroomActions from './ClassroomActions'
import ClassroomFilter from './ClassroomFilter'
import Modal from '@/Theme/Components/Modal'
import { PiStudent } from "react-icons/pi";


export default function ClassroomDataTable({ collection, withNewButton = false, onClickNew }) {
  const { user } = usePage().props.auth

  // ALL COLUMNS BY DEFAULT 'sortable' IS TRUE & 'searchable' IS TRUE
  const ClassroomDataTableColumns = [
    {
      header: '',
      field: '__actions',
      sortable: false,
      searchable: false,
      bodyAlignment: 'center',
      render: (row) => <ClassroomActions row={row} />,
    },
    {
      header: 'Semester',
      field : 'tapel',
      render: (row) => <p>{row.tapel.tahun_pelajaran} {row.tapel.semester == 1 ? 'Ganjil' : 'Genap'}</p>
    },
    {
      header: 'Tingkat Kelas',
      field: 'grade',
    },
    {
      header: 'Nama Kelas',
      field: 'name',
    },
    {
      header: 'Wali Kelas',
      field: 'teacher',
      render: (row) => <p>{row.teacher.fullname}</p>
    },
    {
      header: 'Anggota Kelas',
      render: (row) => <PrimaryButton>Siswa <PiStudent /></PrimaryButton>
    }
  ]

  function canCreateNewClassroom() {
    if (!withNewButton) return false
    // if (!hasPermissionToCreateClassroom()) return false
    // if (['hosting'].includes(user.current_team.type)) return false
    return true
  }

  return (
    <DataTable
      collection={collection}
      columns={ClassroomDataTableColumns}
      ActionsButton={canCreateNewClassroom() && <ActionsButton onClickNew={onClickNew} />}
      // FilterButton={<FilterButton />}
      withSearch
      withPagination
      resetRouteRedirect={route('classroom.index', user.role)}
    />
  )
}

const ActionsButton = ({ onClickNew }) => {
  return (
    <Fragment>
      <PrimaryButton onClick={onClickNew}>
        <BiPlus />
        New
      </PrimaryButton>
    </Fragment>
  )
}

const FilterButton = () => {
  const [visible, setVisible] = useState(false)
  return (
    <Fragment>
      <PrimaryButton onClick={() => setVisible(true)}>
        <FaFilter size={12} />
        Filter
      </PrimaryButton>
      <Modal visible={visible} setVisible={setVisible} noescape>
        {/* <ClassroomFilter closeForm={() => setVisible(false)} /> */}
      </Modal>
    </Fragment>
  )
}
