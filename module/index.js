'use strict';

const BINARY_OPTIONS = require('../lib/core/jhipster/binary_options'),
  UNARY_OPTIONS = require('../lib/core/jhipster/unary_options'),
  RELATIONSHIP_TYPES = require('../lib/core/jhipster/relationship_types'),
  FIELD_TYPES = require('../lib/core/jhipster/field_types'),
  VALIDATIONS = require('../lib/core/jhipster/validations'),
  DATABASE_TYPES = require('../lib/core/jhipster/database_types'),
  JDLReader = require('../lib/reader/jdl_reader'),
  JsonReader = require('../lib/reader/json_reader'),
  convertToJDL = require('../lib/parser/jdl_parser').parse,
  convertToJHipsterJSON = require('../lib/parser/entity_parser').parse,
  JsonParser = require('../lib/parser/json_parser');

const JDLObject = require('../lib/core/jdl_object'),
  JDLApplication = require('../lib/core/jdl_application'),
  JDLEntity = require('../lib/core/jdl_entity'),
  JDLField = require('../lib/core/jdl_field'),
  JDLValidation = require('../lib/core/jdl_validation'),
  JDLEnum = require('../lib/core/jdl_enum'),
  JDLRelationship = require('../lib/core/jdl_relationship'),
  JDLRelationships = require('../lib/core/jdl_relationships'),
  JDLUnaryOption = require('../lib/core/jdl_unary_option'),
  JDLBinaryOption = require('../lib/core/jdl_binary_option');

const JHipsterApplicationExporter = require('../lib/export/jhipster_application_exporter'),
  exportApplications = JHipsterApplicationExporter.exportApplications;

const JHipsterEntityExporter = require('../lib/export/jhipster_entity_exporter'),
  exportEntities = JHipsterEntityExporter.exportEntities,
  createJHipsterEntityFolderFolder = JHipsterEntityExporter.createJHipsterEntityFolderFolder;

const exportToJDL = require('../lib/export/jdl_exporter').exportToJDL,
  JSONFileReader = require('../lib/reader/json_file_reader'),
  toFilePath = JSONFileReader.toFilePath,
  readEntityJSON = JSONFileReader.readEntityJSON,
  ReservedKeywords = require('../lib/core/jhipster/reserved_keywords'),
  ObjectUtils = require('../lib/utils/object_utils'),
  FormatUtils = require('../lib/utils/format_utils'),
  StringUtils = require('../lib/utils/string_utils'),
  Set = require('../lib/utils/objects/set');

module.exports = {
  /* JHipster notions */
  JHipsterBinaryOptions: BINARY_OPTIONS,
  JHipsterUnaryOptions: UNARY_OPTIONS,
  JHipsterRelationshipTypes: RELATIONSHIP_TYPES,
  JHipsterValidations: VALIDATIONS,
  JHipsterFieldTypes: FIELD_TYPES,
  JHipsterDatabaseTypes: DATABASE_TYPES,
  isReservedKeyword: ReservedKeywords.isReserved,
  isReservedClassName: ReservedKeywords.isReservedClassName,
  isReservedTableName: ReservedKeywords.isReservedTableName,
  isReservedFieldName: ReservedKeywords.isReservedFieldName,
  
  /* JDL objects */
  JDLObject: JDLObject,
  JDLApplication: JDLApplication,
  JDLEntity: JDLEntity,
  JDLField: JDLField,
  JDLValidation: JDLValidation,
  JDLEnum: JDLEnum,
  JDLRelationship: JDLRelationship,
  JDLRelationships: JDLRelationships,
  JDLUnaryOption: JDLUnaryOption,
  JDLBinaryOption: JDLBinaryOption,

  /* JDL reading */
  parse: JDLReader.parse,
  parseFromFiles: JDLReader.parseFromFiles,
  /* Json reading */
  parseJsonFromDir: JsonReader.parseFromDir,
  /* JDL conversion */
  convertToJDL: convertToJDL,
  convertToJHipsterJSON: convertToJHipsterJSON,
  /* Json conversion */
  convertJsonEntitiesToJDL: JsonParser.parseEntities,
  convertJsonServerOptionsToJDL: JsonParser.parseServerOptions,

  /* Application exporting */
  exportApplications: exportApplications,

  /* Entity exporting */
  exportEntities: exportEntities,

  /* JDL exporting */
  exportToJDL: exportToJDL,
  /* JDL utils */
  isJDLFile: JDLReader.checkFileIsJDLFile,
  /* JSON utils */
  ObjectUtils: ObjectUtils,
  createJHipsterEntityFolderFolder: createJHipsterEntityFolderFolder,
  readEntityJSON: readEntityJSON,
  toFilePath: toFilePath,
  /* Objects */
  Set: Set,
  /* Utils */
  camelCase: StringUtils.camelCase,
  dateFormatForLiquibase: FormatUtils.dateFormatForLiquibase
};
