const int pinLED = 4;

void setup() {
  pinMode(pinLED, OUTPUT);
  Serial.begin(9600);
  //Serial.write("READY");
}

void loop() {
  if (Serial.available()) {
    int receiver = Serial.read();
    if (receiver == '0') {
      digitalWrite(pinLED, LOW);
    }
    if (receiver == '1') {
      digitalWrite(pinLED, HIGH);
    }
  }
}
