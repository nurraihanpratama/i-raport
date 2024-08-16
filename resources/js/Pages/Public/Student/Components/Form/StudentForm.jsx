import StandardFormModalTemplate from '@/Theme/Components/ModalTemplates/StandardFormModalTemplate'
import FormTextInput from '@/Theme/Form/FormTextInput'
import { useForm } from '@inertiajs/react'
import { userRole } from '@/Helpers/getRole'

import { onErrorFeedback, onSuccessFeedback } from '@/Helpers/formFeedback'
import FormSelectInput from '@/Theme/Form/FormSelectInput'
import FormHeaderBody from '@/Theme/Form/FormHeaderBody'

export default function StudentForm({ action, loadData, closeForm }) {
  const role = userRole().role

  const { Student, options } = loadData

  const { statuses } = options

  function getFormTitle() {
    if (action === 'create') return 'Form Tambah Student'
    if (action === 'update') return 'Update Student'
  }

  function getSubmitBtnLabel() {
    if (action === 'create') return 'Submit'
    if (action === 'update') return 'Update'
  }

  const form = useForm({
    __form_type: action,
    name: Student?.name ?? '',
  })

  const submit = (e) => {
    e.preventDefault()

    // return console.log(form.data)

    if (action === 'create') {
      if (confirm('Yakin untuk submit data baru?')) {
        return form.post(route('student.store', team_slug), {
          preserveScroll: true,
          onSuccess: (response) => onSuccessFeedback(response, closeForm()),
          onError: onErrorFeedback,
        })
      }
    } else {
      if (confirm('Yakin untuk ' + action + ' data?')) {
        return form.put(route('student.' + action, [team_slug, Student?.id]), {
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
          action !== 'create' && <FormHeaderBody label={`ID: ${Student?.Student_no}`} />
        }
      >
        <div className="w-full block space-y-4 lg:w-96 text-gray-700 dark:text-white">
          <FormTextInput
            name="name"
            label="Nama Student"
            value={form.data.name}
            onChange={handleOnChange}
            error={form.errors.name}
          />
        </div>
      </StandardFormModalTemplate>
    )
}
