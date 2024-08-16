import StandardFormModalTemplate from '@/Theme/Components/ModalTemplates/StandardFormModalTemplate'
import FormTextInput from '@/Theme/Form/FormTextInput'
import { useForm } from '@inertiajs/react'
import { userRole } from '@/Helpers/getRole'

import { onErrorFeedback, onSuccessFeedback } from '@/Helpers/formFeedback'
import FormSelectInput from '@/Theme/Form/FormSelectInput'
import FormHeaderBody from '@/Theme/Form/FormHeaderBody'

export default function SubjectForm({ action, loadData, closeForm }) {
  const role = userRole().role

  const { Subject, options } = loadData

  const { statuses } = options

  function getFormTitle() {
    if (action === 'create') return 'Form Tambah Subject'
    if (action === 'update') return 'Update Subject'
  }

  function getSubmitBtnLabel() {
    if (action === 'create') return 'Submit'
    if (action === 'update') return 'Update'
  }

  const form = useForm({
    __form_type: action,
    name: Subject?.name ?? '',
    code: Subject?.code ?? '',
  })

  const submit = (e) => {
    e.preventDefault()

    // return console.log(form.data)

    if (action === 'create') {
      if (confirm('Yakin untuk submit data baru?')) {
        return form.post(route('subject.store', role), {
          preserveScroll: true,
          onSuccess: (response) => onSuccessFeedback(response, closeForm()),
          onError: onErrorFeedback,
        })
      }
    } else {
      if (confirm('Yakin untuk ' + action + ' data?')) {
        return form.put(route('subject.' + action, [role, Subject?.id]), {
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
          action !== 'create' && <FormHeaderBody label={`ID: ${Subject?.Subject_no}`} />
        }
      >
        <div className="block w-full space-y-4 text-gray-700 lg:w-96 dark:text-white">
          <FormTextInput
            name="name"
            label="Nama Mata Pelajaran"
            value={form.data.name}
            onChange={handleOnChange}
            error={form.errors.name}
          />
          <FormTextInput
            name="name"
            label="Kode Mata Pelajaran"
            value={form.data.name}
            onChange={handleOnChange}
            error={form.errors.name}
          />
        </div>
      </StandardFormModalTemplate>
    )
}
