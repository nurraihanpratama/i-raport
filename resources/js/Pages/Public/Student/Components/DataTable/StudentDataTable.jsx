import Modal from '@/Theme/Components/Modal'
import { Fragment, useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import { BiPlus } from 'react-icons/bi'
import { useForm, usePage } from '@inertiajs/react'
// import { hasPermissionToCreateStudent } from '@/Helpers/authorization'
import DataTable from '@/Theme/Components/DataTable/DataTable'
import PrimaryButton from '@/Theme/Components/Buttons/PrimaryButton'
import StudentActions from './StudentActions'
import StudentFilter from './StudentFilter'
import FormSelectInput from '@/Theme/Form/FormSelectInput'
import { getParameterFromUrl, urlModifier } from '@/Helpers/helper'
import SelectInput from '@/Theme/Components/SelectInput'
import ActionButton from '@/Theme/Components/Buttons/ActionButton'
import { router } from '@inertiajs/react'


export default function StudentDataTable({ collection, withNewButton = false, onClickNew }) {
  const { user } = usePage().props.auth

  // ALL COLUMNS BY DEFAULT 'sortable' IS TRUE & 'searchable' IS TRUE
  const StudentDataTableColumns = [
    {
      header: '',
      field: '__actions',
      sortable: false,
      searchable: false,
      bodyAlignment: 'center',
      render: (row) => <StudentActions row={row} />,
    },
    {
      header: 'NISN',
      field: 'nisn',
    },
    {
      header: 'Nama',
      field: 'fullname',
    },
    {
      header: 'Jenis Kelamin',
      field: 'gender',
    },
    {
      header: 'Kelas',
      field: 'classroom_id',
      render: (row) => <p>{row.classroom.name}</p>
    },
    {
      header: 'Tempat Lahir',
      field: 'place_of_birth',
    },
    {
      header: 'Tanggal Lahir',
      field: 'date_of_birth',
    },
    {
      header: 'No. HP',
      field: 'mobile',
    },
  ]

  function canCreateNewStudent() {
    if (!withNewButton) return false
    // if (!hasPermissionToCreateStudent()) return false
    // if (['hosting'].includes(user.current_team.type)) return false
    return true
  }

  return (

    <DataTable
      collection={collection}
      columns={StudentDataTableColumns}
      ActionsButton={canCreateNewStudent() && <ActionsButton onClickNew={onClickNew} />}
      // FilterButton={<FilterButton />}
      withTopFilter={<TopFilter field={'classroom_id'} />}
      withSearch
      withPagination
      resetRouteRedirect={route('student.index', user.role)}
    />
  )
}

const TopFilter = ({label, field}) => {

  const {options, auth} = usePage().props

function onChanged(e) {
  console.log(e)
  const data = e.id
  const resetPage = urlModifier(window.location.href, 'page', 1)
  const fetchUrl = urlModifier(resetPage, field, data)
  return router.get(fetchUrl, {}, { preserveScroll: true })
}


  // Ensure the initial value for the SelectInput is handled properly
  const initialValue = getParameterFromUrl(field);
  const selectedValue = options.classrooms.find(r => r.id == initialValue)?.id || 1;

  return (
    <div className={'flex'}>
        <SelectInput
          className="w-1/4"
          options={options.classrooms}
          value={selectedValue}
          onChange={(val) => onChanged(val)}
          disabled={false}
        />

    </div>
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
        {/* <StudentFilter closeForm={() => setVisible(false)} /> */}
      </Modal>
    </Fragment>
  )
}
