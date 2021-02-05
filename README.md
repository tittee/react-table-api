## ทดสอบการแก้ปัญหา

## Run API โดย /api
```
1. cd /api
1. yarn 
2. yarn start
```

## Run React โดย
```
1. yarn 
2. yarn start
```

```
1. หา component react ดังต่อนี้
   - date picker ที่ไว้เลือกวัน เดือน ปี ได้ โดยถ้าเลือกเป็น พศ. 
      จะดีมาก [day.js + react-datepicker]
   - time picker เลือกเวลาได้ [day.js + react-datepicker]
   - table สามารถ sort row ได้ตาม โดยคลิ๊ก บน header บนตาราง และทำ grop column ได้ 
      ปรับแต่ง style ได้ [react-table-sort]
   - paging เวลาทำรายงานสามารถคลิ๊ก next last ได้ [react-table-sort]
   - blocking ui ถ้ามีการ load api แล้วสามารถ block การคลิ๊ก UI [dispatch state]
   - Autocomplete ที่สามารถ พิมพ์แล้วได้ผลลัพธ์ โดยดึงจาก api [functionally]

2. นำเอา component ข้างต้น มาเขียนเป็น code ตัวอย่าง จัดวางการนำเเสนอทั้งหมดในหน้าเดียว 
ให้สวยงาม ดึงข้อมูล api จาก mock data ที่ตัวเองสร้างขึ้น ทดสอบการวางโครงสร้าง 
และการจัดวางหน้าตา ถ้า responsive ได้จะดี [bulma CSS]

3. นำ code push ขึ้น git hub พร้อมทั้ง publish example 
เพื่อตรวจสอบ code และหน้าตาได้ [Here we go.]

4. ก่อนทำงานให้ประเมินเวลาที่ทำ และหลังจากจบงานให้บอกระยะเวลาที่ใช้งานจริง [Ok, I got it.]
```