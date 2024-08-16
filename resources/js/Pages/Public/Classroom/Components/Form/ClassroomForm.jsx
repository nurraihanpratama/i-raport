import StandardFormModalTemplate from '@/Theme/Components/ModalTemplates/StandardFormModalTemplate'
import FormTextInput from '@/Theme/Form/FormTextInput'
import { useForm } from '@inertiajs/react'
import { userRole } from '@/Helpers/getRole'

import { onErrorFeedback, onSuccessFeedback } from '@/Helpers/formFeedback'
import FormSelectInput from '@/Theme/Form/FormSelectInput'
import FormHeaderBody from '@/Theme/Form/FormHeaderBody'

export default function ClassroomForm({ action, loadData, closeForm }) {
  const role = userRole().role

  const { Classroom, options } = loadData

  const { statuses } = options

  function getFormTitle() {
    if (action === 'create') return 'Form Tambah Classroom'
    if (action === 'update') return 'Update Classroom'
  }

  function getSubmitBtnLabel() {
    if (action === 'create') return 'Submit'
    if (action === 'update') return 'Update'
  }

  const form = useForm({
    __form_type: action,
    name: Classroom?.name ?? '',
    curriculum: Classroom?.curriculum ?? '',
    grade: Classroom?.grade ?? '',
    deparment: Classroom?.deparment ?? '',
    homeroom_teacher: Classroom?.homeroom_teacher ?? '',
  })

  const submit = (e) => {
    e.preventDefault()

    // return console.log(form.data)

    if (action === 'create') {
      if (confirm('Yakin untuk submit data baru?')) {
        return form.post(route('classroom.store', role), {
          preserveScroll: true,
          onSuccess: (response) => onSuccessFeedback(response, closeForm()),
          onError: onErrorFeedback,
        })
      }
    } else {
      if (confirm('Yakin untuk ' + action + ' data?')) {
        return form.put(route('classroom.' + action, [role, Classroom?.id]), {
          preserveScroll: true,
          onSuccess: (response) => onSuccessFeedback(response, closeForm()),
          onError: onErrorFeedback,
        })
      }
    }
  }

  const handleOnChange = (event) => {
    form.setData(event.target.name, event.target.value)
  }

  if (!form.wasSuccessful)
    return (
      <StandardFormModalTemplate
        title={getFormTitle()}
        closeForm={closeForm}
        processing={form.processing}
        submit={submit}
        submitBtnLabel={getSubmitBtnLabel()}
        headerBody={
          action !== 'create' && <FormHeaderBody label={`ID: ${Classroom?.Classroom_no}`} />
        }
      >
        <div className="block w-full space-y-4 text-gray-700 lg:w-96 dark:text-white">
          <FormTextInput
            name="name"
            label="Nama Classroom"
            value={form.data.name}
            onChange={handleOnChange}
            error={form.errors.name}
          />
          <FormTextInput
            name="name"
            label="Kurikulum"
            value={form.data.name}
            onChange={handleOnChange}
            error={form.errors.name}
          />
          <FormTextInput
            name="name"
            label="Tingkat"
            value={form.data.name}
            onChange={handleOnChange}
            error={form.errors.name}
          />
          <FormTextInput
            name="name"
            label="Jurusan"
            value={form.data.name}
            onChange={handleOnChange}
            error={form.errors.name}
          />
          <FormTextInput
            name="name"
            label="Wali Kelas"
            value={form.data.name}
            onChange={handleOnChange}
            error={form.errors.name}
          />
        </div>
      </StandardFormModalTemplate>
    )
}
