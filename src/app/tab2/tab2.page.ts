import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
@Component({
 selector: 'app-tab2',
 templateUrl: 'tab2.page.html',
 styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
 nama_anggota: string = '';
 jk_anggotaa: string = '';
 jurusan: string = '';
 judul_buku: string = '';
 tgl_pinjam: string = '';
 tgl_kembali: string = '';
 no_telpon: string = '';
 email: string = '';
 constructor(
 private router: Router,
 public toastController: ToastController,
 private postPvdr: PostProvider,
 ) {

 }
 ngOnInit() {
 }
 async addRegister() {
 if (this.nama_anggota == '') {
 const toast = await this.toastController.create({
 message: 'Nama Lengkap harus di isi',
 duration: 2000
 });
 toast.present();
 } else if (this.jk_anggotaa == '') {
 const toast = await this.toastController.create({
 message: 'Jenis Kelamin anggotaa harus di isi',
 duration: 2000
 });
 toast.present();
 } else if (this.jurusan == '') {
 const toast = await this.toastController.create({
 message: 'jurusan harus di isi',
 duration: 2000
 });
 toast.present();
 } else if (this.judul_buku == '') {
 const toast = await this.toastController.create({
 message: 'Judul Buku harus di isi',
 duration: 2000
 });
 toast.present();
 } else if (this.tgl_pinjam == '') {
 const toast = await this.toastController.create({
  message: 'Tanggal Pinjam harus di isi',
 duration: 2000
 });
 toast.present();
 } else if (this.tgl_kembali == '') {
 const toast = await this.toastController.create({
 message: 'Tanggal Kembali harus di isi',
 duration: 2000
 });
 toast.present();
 } else if (this.no_telpon == '') {
 const toast = await this.toastController.create({
 message: 'No Hp/Wa harus di isi',
 duration: 2000
 });
 toast.present();
 } else if (this.email == '') {
 const toast = await this.toastController.create({
 message: 'email harus di isi',
 duration: 2000
 });
 toast.present();
 } else {
 let body = {
 nama_anggota: this.nama_anggota,
 jk_anggotaa: this.jk_anggotaa,
 jurusan: this.jurusan,
 judul_buku: this.judul_buku,
 tgl_pinjam: this.tgl_pinjam,
 tgl_kembali: this.tgl_kembali,
 no_telpon: this.no_telpon,
 email: this.email,
 aksi: 'add_register'
 };
 this.postPvdr.postData(body, 'action.php').subscribe(async data => {
 var alertpesan = data.msg;
 if (data.success) {
 this.router.navigate(['/tab4']);
 const toast = await this.toastController.create({
 message: 'Selamat! Registrasi Pendaftaran Sukses.',
 duration: 2000
 });
 toast.present();
 } else {
 const toast = await this.toastController.create({
 message: alertpesan,
 duration: 2000
 });
}
});
}
}
}