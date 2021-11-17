import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

export const PersonList = ({ names }: PersonListProps) => {
  return (
    <div>
      {names.map((name, index) => {
        return (
          <h2 key={name.last}>
            {index + 1}. {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};
