import Modal from '@/Theme/Components/Modal'
import { Fragment, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import { BiPlus } from 'react-icons/bi'
import { usePage } from '@inertiajs/react'
// import { hasPermissionToCreateSubject } from '@/Helpers/authorization'
import DataTable from '@/Theme/Components/DataTable/DataTable'
import PrimaryButton from '@/Theme/Components/Buttons/PrimaryButton'
// import MoneyTemplate from '@/Theme/Components/DataTable/CellTemplates/MoneyTemplate'
import Pill from '@/Theme/Components/Pill'
import SubjectActions from './SubjectActions'
import SubjectFilter from './SubjectFilter'

export default function SubjectDataTable({ collection, withNewButton = false, onClickNew }) {
  const { user } = usePage().props.auth

  // ALL COLUMNS BY DEFAULT 'sortable' IS TRUE & 'searchable' IS TRUE
  const SubjectDataTableColumns = [
    {
      header: '',
      field: '__actions',
      sortable: false,
      searchable: false,
      bodyAlignment: 'center',
      render: (row) => <SubjectActions row={row} />,
    },
    {
      header: 'Mata Pelajaran',
      field: 'name',
    },
    {
      header: 'Singkatan',
      field: 'code',
    },
  ]

  function canCreateNewSubject() {
    if (!withNewButton) return false
    // if (!hasPermissionToCreateSubject()) return false
    // if (['hosting'].includes(user.current_team.type)) return false
    return true
  }

  return (
    <DataTable
      collection={collection}
      columns={SubjectDataTableColumns}
      ActionsButton={canCreateNewSubject() && <ActionsButton onClickNew={onClickNew} />}
      // FilterButton={<FilterButton />}
      withSearch
      withPagination
      resetRouteRedirect={route('subject.index', user.role)}
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
        {/* <SubjectFilter closeForm={() => setVisible(false)} /> */}
      </Modal>
    </Fragment>
  )
}
