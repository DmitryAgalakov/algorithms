const str00 = `C o n t r a r y t o p o p u ll a r b e l i e f L o rs e m I p s u m i ss n o t a a a a a a a a a a a s i m p l y r a n d o m t e x t I t h a s r o o t s`;
const str0 = `Co ntrary to popular belief Lorem Ipsum is not simply random text It has roots in a piece of classical Latin literature from BC making it over years old Richard McClintock a Latin professor at Hampden Sydney College in Virginia looked up one of the more obscure Latin words consectetur from a Lorem Ipsum passage and going through the cites of the word in classical literature discovered the undou btable source C ontr ary to popular belief Lorem Ipsum is not simply random text It has roots in a piece of classical Latin literature from BC making it over years old Richard McClintock a Latin professor at Hampden Sydney College in Virginia looked up one of the more obscure Latin words consectetur from a Lorem Ipsum passage and going through the cites of the word in classical literature discovered the undoubtable source Co ntrary to popular belief Lorem Ipsum is not simply random text It has roots in a piece of classical Latin literature from BC making it over years old Richard McClintock a Latin professor at Hampden Sydney College in Virginia looked up one of the more obscure Latin words consectetur from a Lorem Ipsum passage and going through the cites of the word in classical literature discovered the undoubtable source `;
const str2 = `Co ntrary to popular belief Lorem Ipsum is not simply random text It has roots in a piece of classical Latin literature from BC making it over years old Richard McClintock a Latin professor at Hampden Sydney College in Virginia looked up one of the more obscure Latin words consectetur from a Lorem Ipsum passage and going through the cites of the word in classical literature discovered the undou btable source C ontr ary to popular belief Lorem Ipsum is not simply random text It has roots in a piece of classical Latin literature from BC making it over years old Richard McClintock a Latin professor at Hampden Sydney College in Virginia looked up one of the more obscure Latin words consectetur from a Lorem Ipsum passage and going through the cites of the word in classical literature discovered the undoubtable source Co ntrary to popular belief Lorem Ipsum is not simply random text It has roots in a piece of classical Latin literature from BC making it over years old Richard McClintock a Latin professor at Hampden Sydney College in Virginia looked up one of the more obscure Latin words consectetur from a Lorem Ipsum passage and going through the cites of the word in classical literature discovered the undoubtable source `;
const str3 = `C ont rary  to popular belief Lorem Ipsum is not simply random is is is is is text It has roots in a piece of classical Latin literature from BC making it over years old Richard McClintock a Latin professor at Hampden Sydney College in Virginia looked up one of the more obscure Latin words consectetur from a Lorem Ipsum passage and going through the cites of the word in classical literature discovered the undoub table source Con tra ry to popular belief Lorem Ipsum is not simply random text It has roots in a piece of classical Latin literature from BC making it over years old Richard McClintock a Latin professor at Hampden Sydney College in Virginia looked up one of the more obscure Latin words consectetur from a Lorem Ipsum passage and going through the cites of the word in classical literature discovered the undoubtable source Co nt rary to popular belief Lorem Ipsum is not simply random text It has roots in a piece of classical Latin literature from BC making it over years old Richard McClintock a Latin professor at Hampden Sydney College in Virginia looked up one of the more obscure Latin words consectetur from a Lorem Ipsum passage and going through the cites of the word in classical literature discovered the undoubtable source `;
const str4 = `Co ntrary to popular belief Lorem Ipsum is is is is is is not simply random text It has roots in a piece of classical Lati as a a n literature from BC making it over years old Richard McClintock a Latin professor at Hampden Sydney College in Virginia looked up one of the more obscure Latin words consectetur from a Lorem Ipsum passage and going through the cites of the word in classical literature discovered the undoubtab le source Con trary to popular belief Lorem Ipsum is not simply random text It has roots in a piece of classical Latin literature from BC making it over years old Richard McClintock a Latin professor at Hampden Sydney College in Virginia looked up one of the more obscure Latin words consectetur from a Lorem Ipsum passage and going through the cites of the word in classical literature discovered the undoubtable source Co ntr ary to popular belief Lorem Ipsum is not simply random text It has roots in a piece of classical Latin literature from BC making it over years old Richard McClintock a Latin professor at Hampden Sydney College in Virginia looked up one of the more obscure Latin words consectetur from a Lorem Ipsum passage and going through the cites of the word in classical literature discovered the undoubtable source `;
const str5 = `C ontrary to popular belief Lorem a a a a Ipsum is not simply random text It has roots in a piece of classical Latin literature from BC making it over years old Richard McClintock a Latin professor at Hampden Sydney College in Virginia looked up one of the more obscure Latin words consectetur from a Lorem Ipsum passage and going through the cites of the word in classical literature discovered the undo ubtable source Con trary to popular belief Lorem Ipsum is not simply random text It has roots in a piece of classical Latin literature from BC making it over years old Richard McClintock a Latin professor at Hampden Sydney College in Virginia looked up one of the more obscure Latin words consectetur from a Lorem Ipsum passage and going through the cites of the word in classical literature discovered the undoubtable source Cont rary to popular belief Lorem Ipsum is not simply random text It has roots in a piece of classical Latin literature from BC making it over years old Richard McClintock a Latin professor at Hampden Sydney College in Virginia looked up one of the more obscure Latin words consectetur from a Lorem Ipsum passage and going through the cites of the word in classical literature discovered the undoubtable source `;
const str6 = `Contrary to popular belief Lorem Ipsum is not simply random text It has roots in a piece of classical L as as as as atin literature from BC making it over years old Richard McClintock a Latin professor at Hampden Sydney College in Virginia looked up one of the more obscure Latin words consectetur from a Lorem Ipsum passage and going through the cites of the word in classical literature discovered  the undoubtable source Contr ary to popular belief Lorem Ipsum is not simply random text It has roots in a piece of classical Latin literature from BC making it over years old Richard McClintock a Latin professor at Hampden Sydney College in Virginia looked up one of the more obscure Latin words consectetur from a Lorem Ipsum passage and going through the cites of the word in classical literature discovered the undoubtable source C ontrary to popular belief Lorem Ipsum is not simply random text It has roots in a piece of classical Latin literature from BC making it over years old Richard McClintock a Latin professor at Hampden Sydney College in Virginia looked up one of the more obscure Latin words consectetur from a Lorem Ipsum passage and going through the cites of the word in classical literature discovered the undoubtable source `;
const str7 = `atin professor at Hampden Sydney College in Virginia looked up one of the more obscure Latin words consectetur from a Lorem Ipsum passa g e and going through the cites`;
const str = str0 + str2 + str3 + str4 + str5 + str6 + str7;
// const str = str00;

const numLength = (num) => num.toString().length;

const SLASH_LENGTH = 1;

// Если учитывать, что пробел это НЕ отдельное слово.
function smsRecursive(str, n) {
  let word = '';
  let sms = '';
  let k = 0;
  const allSms = [];

  for (let i = 0; i < str.length; i++) {
    if (numLength(n) < numLength(k)) {
      return smsRecursive(str, k);
    }
    word += str[i];

    if (str[i] !== ' ' && str.length - 1 !== i) continue;

    const newSmsLength = sms.length + word.length + numLength(k + 1) + SLASH_LENGTH + numLength(n);

    if (newSmsLength <= 140) {
      sms += word;
    } else {
      k++;
      allSms.push(`${sms}${k}/${n}`);
      sms = word;
    }
    word = '';
  }

  if (sms.length) {
    k++;
    allSms.push(`${sms}${k}/${n}`);
  }

  return allSms;
}

const print = (allSms) => {
  // Вывод.
  allSmsObjs = allSms.map((sms, i) => ({
    index: i,
    sms: sms,
    length: sms.length,
  }));
  console.log(allSmsObjs);

  // Тест.
  console.log(
    'Failed: ',
    allSmsObjs.filter((sms) => sms.length > 140),
  );
};

const start = () => {
  const allSms = smsRecursive(str, 1);
  const result = smsRecursive(str, allSms.length, true);
  print(result);
};

start();
