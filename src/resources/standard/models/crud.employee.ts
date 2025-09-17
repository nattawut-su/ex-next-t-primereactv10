export interface EmployeeModel {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
  age: string;
}

export const getAge = (rowData: EmployeeModel) => {
  if (!rowData.birthDate) return '';
  const birth = new Date(rowData.birthDate);
  if (isNaN(birth.getTime())) return '';
  const today = new Date();

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  // ยังไม่ถึงวันเกิดในเดือนนี้ ต้องยืมจำนวนวันจากเดือนก่อนหน้า และลดเดือนลง 1
  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  // ยังไม่ถึงเดือนเกิดในปีนี้ ต้องลดปีลง 1 และเพิ่มเดือนเป็น 12
  if (months < 0) {
    years--;
    months += 12;
  }
  return `${years} ปี ${months} เดือน ${days} วัน`;
};
