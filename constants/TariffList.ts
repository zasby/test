
//
// Bb1Economy: Эконом BB1,
// Bb1Business: Бизнес BB1,
// Bb1Premium: Премиум BB1,
// Bb2Economy: Эконом BB2,
// Bb2Business: Бизнес BB2,
// Bb2Premium: Премиум BB2,
// Resident: Резидент,
// Vip: VIP,
// Demo: Демо,
// PlatinumResident: Платиновый резидент,
// Custom: Индивидуальные условия

import { TariffType } from "../api/models/CompanyForAdminDto";
import { ISelectItem } from "../types/Select.Interface";

export const TARIFF_LIST: ISelectItem[] = [
  {
    id: 1,
    value: TariffType.Bb1Economy,
    text: "ui:tariffs.Bb1Economy"
  },
  {
    id: 2,
    value: TariffType.Bb1Business,
    text: "ui:tariffs.Bb1Business"
  },
  {
    id: 3,
    value: TariffType.Bb1Premium,
    text: "ui:tariffs.Bb1Premium"
  },
  {
    id: 4,
    value: TariffType.Bb2Economy,
    text: "ui:tariffs.Bb2Economy"
  },
  {
    id: 5,
    value: TariffType.Bb2Business,
    text: "ui:tariffs.Bb2Business"
  },{
    id: 6,
    value: TariffType.Bb2Premium,
    text: "ui:tariffs.Bb2Premium"
  },
  {
    id: 7,
    value: TariffType.Resident,
    text: "ui:tariffs.Resident"
  },
  {
    id: 8,
    value: TariffType.Vip,
    text: "ui:tariffs.Vip"
  },
  {
    id: 9,
    value: TariffType.Demo,
    text: "ui:tariffs.Demo"
  },
  {
    id: 10,
    value: TariffType.PlatinumResident,
    text: "ui:tariffs.PlatinumResident"
  },
  {
    id: 11,
    value: TariffType.Custom,
    text: "ui:tariffs.Custom"
  },
]
