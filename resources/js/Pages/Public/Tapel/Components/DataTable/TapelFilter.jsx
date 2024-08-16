import FilterCheckboxes from '@/Theme/Components/DataTable/FilterTemplates/FilterCheckboxes'
import { userRole } from '@/Helpers/getRole'

import { getParameterFromUrl } from '@/Helpers/helper'
import { useForm, usePage } from '@inertiajs/react'
import DataFiltering from '@/Theme/Components/DataTable/DataFiltering'

export default function TapelFilter({ closeForm }) {
  const { options } = usePage().props

  const form = useForm({
    page: 1,
    status: getParameterFromUrl('status') ?? '',
    // type: getParameterFromUrl('type') ?? '',
  })

  const role = userRole().role

  const submit = (e) => {
    e.preventDefault()
    form.get(route('tapel.index', team_slug), {
      preserveScroll: true,
    })
  }

  return (
    <DataFiltering filters={options} form={form} submit={submit} closeForm={closeForm}>
      <FilterBox title="Filter Status">
        <FilterCheckboxes
          data={options.statuses}
          onChange={(sel) => form.setData('status', sel)}
          currentSelected={form.data.status}
        />
      </FilterBox>
    </DataFiltering>
  )
}

const FilterBox = ({ title, children }) => {
  return (
    <div className="p-4 space-y-2 bg-yellow-50 dark:bg-gray-700 text-gray-700 dark:text-white shadow-md rounded-md">
      <p className="text-left">{title}</p>
      {children}
    </div>
  )
}
