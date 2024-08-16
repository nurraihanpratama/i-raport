import MenuDropdown from '@/Components/MenuDropdown'
import MenuItemButtonDropdown from '@/Components/MenuItemButtonDropdown'
import { Menu } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import Modal from '@/Theme/Components/Modal'
import { BiMessageSquareEdit } from 'react-icons/bi'
import axios from 'axios'
import { usePage } from '@inertiajs/react'
import ProcessingLoader from '@/Theme/Components/ProcessingLoader'
// import { hasPermissionToUpdateTapel } from '@/Helpers/authorization'
import TapelForm from '../Form/TapelForm'
import { fetchErrorCatch } from '@/Helpers/helper'

export default function TapelActions({ row }) {
  const [formAction, setFormAction] = useState('update')
  const [processing, setProcessing] = useState(false)
  const [loadData, setLoadData] = useState(null)

  const [showForm, setShowForm] = useState(false)

  function canUpdateTapel() {
    // if (!hasPermissionToUpdateTapel()) return false
    return true
  }

  const { user } = usePage().props.auth

  const openForm = () => {
    setProcessing(true)
    const url = route('tapel.edit', [user.role, row.id])
    const params = {
      form_action: formAction,
    }
    axios
      .get(url, { params })
      .then((response) => {
        setLoadData(response.data)
        setProcessing(false)
        setShowForm(true)
      })
      .catch((error) => fetchErrorCatch(error, setProcessing(false)))
  }

  return (
    <Fragment>
      <MenuDropdown>
        {/* Update */}
        <Menu.Item>
          {({ active }) => (
            <MenuItemButtonDropdown
              icon={<BiMessageSquareEdit size={20} />}
              label="Update Data"
              onClick={() => {
                setFormAction('update')
                openForm()
              }}
              disabled={!canUpdateTapel()}
            />
          )}
        </Menu.Item>
      </MenuDropdown>

      <Modal visible={processing} setVisible={setProcessing} noescape>
        <ProcessingLoader visible={processing} />
      </Modal>

      <Modal visible={showForm} setVisible={setShowForm} noescape>
        <TapelForm
          action={formAction}
          loadData={loadData}
          closeForm={() => setShowForm(false)}
        />
      </Modal>
    </Fragment>
  )
}
