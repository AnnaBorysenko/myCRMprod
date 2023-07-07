
<template>
  <h1 class="form-register" >{{ $t('register') }}</h1>
  <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm main-container-form"
      :size="formSize"
      status-icon

  >
    <el-form-item label="Your name" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="Your full name" prop="FullName">
      <el-input v-model="ruleForm.FullName" />
    </el-form-item>
    <el-form-item label="Your email" prop="email">
      <el-input v-model="ruleForm.email" />
    </el-form-item>
    <el-form-item label="Your phone" prop="phone">
      <el-input v-model="ruleForm.phone" />
    </el-form-item>
    <el-form-item label="Instant delivery" prop="delivery">
      <el-switch v-model="ruleForm.delivery" />
    </el-form-item>
    <el-form-item label="type" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="Online" name="type" />
        <el-checkbox label="Offline" name="type" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="Resources" prop="resource">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="Sponsorship" />
        <el-radio label="Venue" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="form" prop="desc">
      <el-input v-model="ruleForm.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Create
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: 'Jon',
  FullName: '',
  email: '',
  phone: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const rules = reactive<FormRules>({
  name: [
    { required: true, message: 'Please input name', trigger: 'blur' },
    { min: 2, max: 10, message: 'Length should be 2 to 10', trigger: 'blur' },
  ],
  FullName: [
    { required: true, message: 'Please input full name', trigger: 'blur' },
    { min: 2, max: 10, message: 'Length should be 2 to 10', trigger: 'blur' },
  ],
  email: [
    { required: true, message: 'Please input full email', trigger: 'blur' },
    { min: 2, max: 10, message: 'Length should be 2 to 10', trigger: 'blur' },
  ],
  phone:  [
    { required: true, message: 'Please input full email', trigger: 'blur' },
    { min: 2, max: 11, message: 'Length should be 2 to 10', trigger: 'blur' }
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select resource',
      trigger: 'change',
    },
  ],
  desc: [
    { required: true, message: 'Please input form', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
</script>

<style>
.main-container-form {
  width: 600px;
  margin: auto;
}
.form-register {
 margin-top: 20px;
  margin-bottom: 20px;
}
</style>
