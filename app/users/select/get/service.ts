import type { Service } from "#type/service";

import { DTO } from "./dto";

export default function UsersGetService(): Service<typeof DTO> {
  return (data) => {
    console.log(data);
    return data;
  };
}
