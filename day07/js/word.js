
var word = [];

word[0] = "당신은 지금도 최고고, 이전에도 최고였으며 앞으로도 최고일 것이다.";
word[1] = "성공하는 사람은 실패하는데 익숙한 사람이다.";
word[2] = "후회를 최대한 이용하라. 싶이 후회한다는 것은 새로운 삶을 산다는 것이다.";
word[3] = "가짜 친구는 소문을 믿고, 진짜 친구는 나를 믿는다.";
word[4] = "성공이라는 못을 박으려면 끈질김이라는 망치가 필요하다.";

var idx = Math.floor(Math.random() * word.length);
// document.write(word.length);
document.write(word[idx]);