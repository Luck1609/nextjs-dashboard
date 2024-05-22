import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import React from 'react';
import Breadcrumbs from '../../breadcrumbs';
import EditInvoiceForm from '../../edit-form';

export default async function EditInvoice({ params }: { params: { id: string } }) {
  const id = params.id, [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers()
  ]);
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <EditInvoiceForm customers={customers} invoice={invoice} />
    </div>
  );
}
