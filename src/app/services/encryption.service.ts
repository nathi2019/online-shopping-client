import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';
import { environment } from '../../environments/environment';
import * as crypto from 'crypto-browserify';



@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  private paymentPublicKey: string;
  private enabled: boolean;

  constructor() {
    this.paymentPublicKey = environment.paymentPublicKey;
    this.enabled = environment.encryptionEnabled;
  }
  isEnabled() {
    return this.enabled;
  }
  // encrypt(plaintext : string){
  //   if(!this.enabled){
  //     return plaintext;
  //   }
  //   let buffer = Buffer.from(plaintext,'base64'); 
  //   let encrypted = crypto.publicEncrypt(this.paymentPublicKey, buffer);
  //   return encrypted.toString('base64'); 
  // }
  // decrypt(cypher: string): string {
  //   if (!this.enabled)
  //     return cypher;

  //   let buffer = Buffer.from(cypher, 'base64');
  //   let plaintext = crypto.publicDecrypt(this.paymentPublicKey, buffer);

  //   return plaintext.toString('utf8')
  // }
}
