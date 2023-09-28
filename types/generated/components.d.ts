import type { Schema, Attribute } from '@strapi/strapi';

export interface SubcategorySubcategory extends Schema.Component {
  collectionName: 'components_subcategory_subcategories';
  info: {
    displayName: 'Subcategory';
    icon: 'oneToMany';
  };
  attributes: {
    name: Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'subcategory.subcategory': SubcategorySubcategory;
    }
  }
}
