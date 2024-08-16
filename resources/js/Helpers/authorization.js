import { usePage } from '@inertiajs/react'

export const permissions = () => {
  const arr = [
    ...usePage().props.auth.user.permissions.map((permission) => permission.name),
    'logout',
  ]
  return arr

  // return arr.push('logout')
}

// export const isAdminUser = (roles) => {
//   return roles.some((r) =>
//     [
//       'Superuser',
//       'Admin Hosting',
//       'Admin Member',
//       'Owner Hosting',
//       'Owner Member',
//     ].includes(r),
//   )
// }

export const isCurrentTeamAsHostingUser = (roles) => {
  return usePage().props.auth.user.current_team.type == 'hosting'
}

export const userDepartment = (department) => {
  return usePage().props.auth.user.user_department == department
}

export const isSuperUser = () => {
  return usePage().props.auth.user.superuser
}

// !############## MODULES ###########

// CUSTOMER MODULE -------
export const hasPermissionToCreateCustomer = () => {
  return permissions()?.some((p) => p === 'customer.create')
}
export const hasPermissionToUpdateCustomer = () => {
  return permissions()?.some((p) => p === 'customer.update')
}
export const hasPermissionToMigrateCustomer = () => {
  return permissions()?.some((p) => p === 'customer.migrate')
}
// ------- CUSTOMER MODULE

// AREA MODULE ------

export const hasPermissionToCreateArea = () => {
  return permissions()?.some((p) => p === 'area.create')
}
export const hasPermissionToUpdateArea = () => {
  return permissions()?.some((p) => p === 'area.update')
}
export const hasPermissionToDeleteArea = () => {
  return permissions()?.some((p) => p === 'area.delete')
}
// ------ AREA MODULE

// SUBSCRIPTION MODULE -------
export const hasPermissionToCreateSubscription = () => {
  return permissions()?.some((p) => p === 'subscription.create')
}
export const hasPermissionToUpdateSubscription = () => {
  return permissions()?.some((p) => p === 'subscription.update')
}
export const hasPermissionToConfirmSubscription = () => {
  return permissions()?.some((p) => p === 'subscription.confirm')
}
export const hasPermissionToAdjustSubscription = () => {
  return permissions()?.some((p) => p === 'subscription.adjustment')
}
export const hasPermissionToCancelSubscription = () => {
  return permissions()?.some((p) => p === 'subscription.cancel')
}
export const hasPermissionToConfirmTerminateSubscription = () => {
  return permissions()?.some((p) => p === 'subscription.confirm-terminate')
}
export const hasPermissionToTerminateSubscription = () => {
  return permissions()?.some((p) => p === 'subscription.terminate')
}
// ------- SUBSCRIPTION MODULE

// INVOICE MODULE -------
export const hasPermissionToPayInvoice = () => {
  return permissions()?.some((p) => p === 'invoice.pay')
}
export const hasPermissionToGenerateNextInvoice = () => {
  return permissions()?.some((p) => p === 'invoice.generate')
}
export const hasPermissionToVoidInvoice = () => {
  return permissions()?.some((p) => p === 'invoice.void')
}
// ------- INVOICE MODULE

// PAYMENT MODULE -------
export const hasPermissionToCancelPayment = () => {
  return permissions()?.some((p) => p === 'invoice-payment.cancel')
}
// ------- PAYMENT MODULE

// USER MODULE -------
export const hasPermissionToCreateUser = () => {
  return permissions()?.some((p) => p === 'user.create')
}
export const hasPermissionToUpdateUser = () => {
  return permissions()?.some((p) => p === 'user.update')
}
// ------- USER MODULE

// PERMISSION MODULE -------
export const hasPermissionToCreatePermission = () => {
  return permissions()?.some((p) => p === 'permission.create')
}
export const hasPermissionToUpdatePermission = () => {
  return permissions()?.some((p) => p === 'permission.update')
}
// ------- PERMISSION MODULE

// HELPDESK MODULE -------
export const hasPermissionToCreateHelpdeskTicket = () => {
  return permissions()?.some((p) => p === 'ticket-management.create')
}
export const hasPermissionToUpdateHelpdeskTicket = () => {
  return permissions()?.some((p) => p === 'ticket-management.update')
}
// ------- HELPDESK MODULE

// PRODUCT MODULE -------
export const hasPermissionToCreateProduct = () => {
  return permissions()?.some((p) => p === 'my-product.create')
}
export const hasPermissionToUpdateProduct = () => {
  return permissions()?.some((p) => p === 'my-product.update')
}
// ------- PRODUCT MODULE

// FEE MODULE -------
export const hasPermissionToCreateFee = () => {
  return permissions()?.some((p) => p === 'fee.create')
}
export const hasPermissionToUpdateFee = () => {
  return permissions()?.some((p) => p === 'fee.update')
}
// ------- FEE MODULE

// ------- DEVIME MANAGEMENT MODULE
export const hasPermissionToCreateDevice = () => {
  return permissions()?.some((p) => p === 'device.create')
}

export const hasPermissionToUpdateDevice = () => {
  return permissions()?.some((p) => p === 'device.update')
}

export const hasPermissionToDeleteDevice = () => {
  return permissions()?.some((p) => p === 'device.delete')
}
// ------- DEVIME MANAGEMENT MODULE

// CUSTOMER DEVICE MODULE -------
export const hasPermissionToCreateCustomerDevice = () => {
  return permissions()?.some((p) => p === 'customer-device.create')
}
export const hasPermissionToUpdateCustomerDevice = () => {
  return permissions()?.some((p) => p === 'customer-device.update')
}
export const hasPermissionToReplaceCustomerDevice = () => {
  return permissions()?.some((p) => p === 'customer-device.replace')
}
export const hasPermissionToRemoveCustomerDevice = () => {
  return permissions()?.some((p) => p === 'customer-device.remove')
}
// ------- CUSTOMER DEVICE MODULE

// CUSTOMER ACTIVATION MODULE -------
export const hasPermissionToCreateCustomerActivation = () => {
  return permissions()?.some((p) => p === 'customer-activation.create')
}
export const hasPermissionToUpdateCustomerActivation = () => {
  return permissions()?.some((p) => p === 'customer-activation.update')
}
// ------- CUSTOMER ACTIVATION MODULE

// CREDIT NOTE MODULE -------
export const hasPermissionToCreateCreditNote = () => {
  return permissions()?.some((p) => p === 'credit-note.create')
}
export const hasPermissionToUpdateCreditNote = () => {
  return permissions()?.some((p) => p === 'credit-note.update')
}
export const hasPermissionToDeleteCreditNote = () => {
  return permissions()?.some((p) => p === 'credit-note.delete')
}
// ------- CREDIT NOTE MODULE

// DEBIT NOTE MODULE -------
export const hasPermissionToCreateDebitNote = () => {
  return permissions()?.some((p) => p === 'debit-note.create')
}
export const hasPermissionToUpdateDebitNote = () => {
  return permissions()?.some((p) => p === 'debit-note.update')
}
export const hasPermissionToDeleteDebitNote = () => {
  return permissions()?.some((p) => p === 'debit-note.delete')
}
// ------- DEBIT NOTE MODULE

// RECEIPT VOUCHER MODULE -------
export const hasPermissionToCreateReceiptVoucher = () => {
  return permissions()?.some((p) => p === 'receipt-voucher.create')
}
export const hasPermissionToUpdateReceiptVoucher = () => {
  return permissions()?.some((p) => p === 'receipt-voucher.update')
}
// ------- RECEIPT VOUCHER MODULE

// TAGIHAN LO MODULE -------
export const hasPermissionToUpdateBatchPaymentMerchantInvoice = () => {
  return permissions()?.some((p) => p === 'batch-payment-merchant-invoice.create')
}

export const hasPermissionToPayMerchantInvoice = () => {
  return permissions()?.some((p) => p === 'merchant-invoice.pay')
}
export const hasPermissionToUpdateMerchantModal = () => {
  return permissions()?.some((p) => p === 'merchant-invoice.update-cost')
}
// ------- TAGIHAN LO MODULE

// TEAM MANAGEMENT MODULE -------
export const hasPermissionToCreateTeam = () => {
  return permissions()?.some((p) => p === 'team-management.create')
}
export const hasPermissionToUpdateTeam = () => {
  return permissions()?.some((p) => p === 'team-management.update')
}
// ------- TEAM MANAGEMENT MODULE

// !############## MODULES ###########
