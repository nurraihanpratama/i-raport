import Modal from '@/Theme/Components/Modal'
import { Fragment, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import { BiPlus } from 'react-icons/bi'
import { usePage } from '@inertiajs/react'
// import { hasPermissionToCreateTeacher } from '@/Helpers/authorization'
import DataTable from '@/Theme/Components/DataTable/DataTable'
import PrimaryButton from '@/Theme/Components/Buttons/PrimaryButton'
import Pill from '@/Theme/Components/Pill'
import TeacherActions from './TeacherActions'
import TeacherFilter from './TeacherFilter'

export default function TeacherDataTable({ collection, withNewButton = false, onClickNew }) {
  const { user } = usePage().props.auth

  // ALL COLUMNS BY DEFAULT 'sortable' IS TRUE & 'searchable' IS TRUE
  const TeacherDataTableColumns = [
    {
      header: '',
      field: '__actions',
      sortable: false,
      searchable: false,
      bodyAlignment: 'center',
      render: (row) => <TeacherActions row={row} />,
    },
    {
      header: 'Nama Lengkap',
      field: 'fullname',
    },
    {
      header: 'NIP',
      field: 'nip',
    },
    {
      header: 'NUPTK',
      field: 'nuptk',
    },
    {
      header: 'Tempat Lahir',
      field: 'place_of_birth',
    },
    {
      header: 'Tanggal Lahir',
      field: 'date_of_birth',
    },
  ]

  function canCreateNewTeacher() {
    if (!withNewButton) return false
    // if (!hasPermissionToCreateTeacher()) return false
    // if (['hosting'].includes(user.current_team.type)) return false
    return true
  }

  return (
    <DataTable
      collection={collection}
      columns={TeacherDataTableColumns}
      ActionsButton={canCreateNewTeacher() && <ActionsButton onClickNew={onClickNew} />}
      // FilterButton={<FilterButton />}
      withSearch
      withPagination
      resetRouteRedirect={route('teacher.index', user.role)}
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
        {/* <TeacherFilter closeForm={() => setVisible(false)} /> */}
      </Modal>
    </Fragment>
  )
}
