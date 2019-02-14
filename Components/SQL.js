import { SQLite } from "expo" ;

const tableName = "qrs";
const db = SQLite.openDatabase("qrs");

export default class SQL {
  static InitDatabase() {
    db.transaction(tx => {
      tx.executeSql (
        'create table if not exists ${tableName} (id integer primary key not null, value text, data text);'
      );
    });
  }

  static AddQR = text => {
    db.transaction(
      tx => {
        tx.executeSql('insert inti ${tableName} (value, data) value (?,?)', [
          text,
          new Date().toUTCString()
        ]);
      },
      null,
      null
    );
  };

  static GetQRS = () => {
    return new Promise((resolve, reject) => {
      db.transaction(async tx => {
        await tx.executeSql(
          'select * from ${tableName} order by id DESC',
          null,
          (_, { rows: { _array } }) => {
            resolve(_array);
          }
        );
      });
    });
  };

}
