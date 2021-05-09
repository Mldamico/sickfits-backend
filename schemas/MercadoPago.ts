import { text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const MercadoPago = list({
  fields: {
    url: text({ isRequired: true }),
  },
});
