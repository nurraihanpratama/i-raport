import StandardFormModalTemplate from '../ModalTemplates/StandardFormModalTemplate'

export default function DataFiltering({ form, submit, closeForm, children }) {
  return (
    <StandardFormModalTemplate
      title="Data Filtering"
      closeForm={closeForm}
      processing={form.processing}
      submit={submit}
      submitBtnLabel="Apply Filter"
    >
      <div className="grid grid-cols-1 gap-4 p-4">{children}</div>
    </StandardFormModalTemplate>
  )
}
