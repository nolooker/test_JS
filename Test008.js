function calculateAnnualLeave(joinDate) {
    const today = new Date(); // 현재 날짜를 가져옵니다.
    const joinYear = joinDate.getFullYear(); // 입사 연도를 가져옵니다.
    const joinMonth = joinDate.getMonth(); // 입사 월을 가져옵니다.
    const currentYear = today.getFullYear(); // 현재 연도를 가져옵니다.
    const currentMonth = today.getMonth(); // 현재 월을 가져옵니다.
  
    let annualLeave = 0;
  
    // 입사 연도에 따른 연차 계산
    if (currentYear === joinYear) {
      annualLeave = currentMonth - joinMonth; // 현재 월 - 입사 월
    } else if (currentYear === joinYear + 1) {
      annualLeave = 12 + currentMonth - joinMonth; // 12개월 + 현재 월 - 입사 월
    } else if (currentYear > joinYear + 1) {
      annualLeave = 12 + (currentYear - joinYear - 1) + currentMonth; // 12개월 + (현재 연도 - 입사 연도 - 1) + 현재 월
    }
  
    return annualLeave;
  }
  
  // A씨의 입사일인 2020년 2월 5일로 연차를 계산합니다.
  const joinDate = new Date(2020, 1, 5); // 월은 0부터 시작하므로 1은 2월을 의미합니다.
  const annualLeave = calculateAnnualLeave(joinDate);
  console.log("올해 A씨의 연차: " + annualLeave + "일");
  
  