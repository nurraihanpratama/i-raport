import Modal from '@/Theme/Components/Modal'
import { Fragment, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import { BiPlus } from 'react-icons/bi'
import { usePage } from '@inertiajs/react'
// import { hasPermissionToCreateTapel } from '@/Helpers/authorization'
import DataTable from '@/Theme/Components/DataTable/DataTable'
import PrimaryButton from '@/Theme/Components/Buttons/PrimaryButton'
import Pill from '@/Theme/Components/Pill'
import TapelActions from './TapelActions'
import TapelFilter from './TapelFilter'

export default function TapelDataTable({ collection, withNewButton = false, onClickNew }) {
  const { user } = usePage().props.auth

  // ALL COLUMNS BY DEFAULT 'sortable' IS TRUE & 'searchable' IS TRUE
  const TapelDataTableColumns = [
    {
      header: '',
      field: '__actions',
      sortable: false,
      searchable: false,
      bodyAlignment: 'center',
      render: (row) => <TapelActions row={row} />,
    },
    {
      header: 'Tahun Ajaran',
      field: 'tahun_ajaran',
    },
    {
      header: 'Semester',
      field: 'semester',
      render: (row) => <p>{row.semester == 1 ? 'Semester Ganjil' : 'Semester Genap'}</p>
    },
  ]

  function canCreateNewTapel() {
    if (!withNewButton) return false
    // if (!hasPermissionToCreateTapel()) return false
    // if (['hosting'].includes(user.current_team.type)) return false
    return true
  }

  return (
    <DataTable
      collection={collection}
      columns={TapelDataTableColumns}
      ActionsButton={canCreateNewTapel() && <ActionsButton onClickNew={onClickNew} />}
      // FilterButton={<FilterButton />}
      withSearch
      withPagination
      resetRouteRedirect={route('tapel.index', user.role)}
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
        {/* <TapelFilter closeForm={() => setVisible(false)} /> */}
      </Modal>
    </Fragment>
  )
}
