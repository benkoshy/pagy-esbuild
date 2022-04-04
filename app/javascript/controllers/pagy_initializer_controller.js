// pagy_initializer_controller.js
import { Controller } from "@hotwired/stimulus"
import Pagy from "pagy-module";


export default class extends Controller {
  connect() {    
    Pagy.init(this.element)
  }
}