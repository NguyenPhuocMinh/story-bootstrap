import {
  VampireList,
  VampireCreate,
  MonsterList,
  MonsterCreate,
  VampireEdit
} from '../components';

const resources = [
  {
    name: 'vampire-list',
    component: VampireList
  },
  {
    name: 'vampire-create',
    component: VampireCreate
  },
  {
    name: 'vampire-edit/:id',
    component: VampireEdit
  },
  {
    name: 'monster-list',
    component: MonsterList
  },
  {
    name: 'monster-create',
    component: MonsterCreate
  }
];

export default resources;
