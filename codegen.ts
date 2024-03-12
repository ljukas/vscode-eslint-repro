import { CodegenConfig } from '@graphql-codegen/cli';
import {
  DateResolver,
  EmailAddressResolver,
  LocalDateResolver,
} from 'graphql-scalars';

const config: CodegenConfig = {
  overwrite: true,
  require: ['ts-node/register/transpile-only'],
  ignoreNoDocuments: true,
  config: {
    useIndexSignature: true,
    dedupeFragments: true,
  },
  generates: {
    './apps/gateway/src/modules/': {
      schema: './apps/gateway/src/modules/**/typedefs/*.gql',
      preset: 'graphql-modules',
      config: {
        contextType: 'GraphQLModules.ModuleContext',
        inputMaybeValue: 'T | null | undefined',
        mapperTypeSuffix: 'Model',
        scalars: {
          EmailAddress: EmailAddressResolver.extensions.codegenScalarType,
          DateTime: {
            input: 'Date',
            output: 'Date | string',
          },
          DateOnly: DateResolver.extensions.codegenScalarType,
          LocalDate: LocalDateResolver.extensions.codegenScalarType,
        },
        mappers: {
          BaseBankIdCollect: '../modules/authentication#BaseBankIdCollect',
          PendingBankIdCollect: '../modules/authentication#BaseBankIdCollect',
          FailedBankIdCollect: '../modules/authentication#BaseBankIdCollect',
          CompleteBankIdCollect: '../modules/authentication#BaseBankIdCollect',
          Progress: '../modules/account-progress#BaseProgress',
          ResidentialAddress: '../modules/housings#BaseResidentialAddress',
          RealEstate: '../modules/housings#BaseRealEstate',
          HousingAccountUser: '../modules/housings#BaseHousingAccountUser',
          HousingAccount: '../modules/housings#BaseHousingAccount',
          EnergyDeclaration: '../modules/housings#BaseEnergyDeclaration',
          User: '../modules/user#BaseUser',
          PreviewTransitionPlan:
            '../modules/energy-transition#BasePreviewTransitionPlan',
          TransitionPlan:
            '../modules/energy-transition#BaseCombinedTransitionPlan',
          EnergyMeasureSummary:
            '../modules/energy-transition#BaseEnergyMeasureSummary',
          EnergyTransitionValidation:
            '../modules/energy-transition#BaseEnergyTransitionValidation',
          EnergyAnalysis: '../modules/energy-transition#BaseEnergyAnalysis',
          BaseMeasure: '../modules/energy-transition#EnergyMeasure',
          RenovationMeasure:
            '../modules/energy-transition#BaseRenovationMeasure',
          RenovationMeasureAddition:
            '../modules/energy-transition#BaseRenovationMeasureAddition',
          HeatingMeasure: '../modules/energy-transition#BaseHeatingMeasure',
          HeatingMeasureAddition:
            '../modules/energy-transition#BaseHeatingMeasureAddition',
          EnergyGenerationMeasure:
            '../modules/energy-transition#BaseEnergyGenerationMeasure',
          EnergyGenerationMeasureAddition:
            '../modules/energy-transition#BaseEnergyGenerationMeasureAddition',
          File: '../modules/file#BaseFile',
          FileUploadResult: '../modules/file#BaseFileUploadResult',
          FileThumbnail: '../modules/file#BaseFileThumbnail',
          Project: '../modules/project#OldBaseProject',
          Project2: '../modules/project#BaseProject',
          Mortgage: '../modules/mortgage#BaseMortgage',
          MortgagePart: '../modules/mortgage#BaseMortgagePart',
          Bank: '../modules/mortgage#BaseBank',
          BankInterestRate: '../modules/mortgage#BaseBankInterestRate',
          AverageBankInterestRate:
            '../modules/mortgage#BaseAverageBankInterestRate',
          InterestStatistics: '../modules/mortgage#BaseInterestStatistic',
          MacrobondSeries: '../modules/mortgage#BaseMacrobondSeries',
          MacrobondSeriesDatum: '../modules/mortgage#BaseMacrobondSeriesDatum',
          Category: '../modules/misc#BaseCategory',
          Valuation: '../modules/valuation#BaseValuationBasis',
          ValuationDatum: '../modules/valuation#BaseValuationDatum',
          ValuationBasis: '../modules/valuation#BaseValuationBasis',
          ValuationMetadata: '../modules/valuation#BaseValuationMetadata',
          SalesCalculation: '../modules/valuation#BaseSalesCalculation',
          Notification: '../modules/notifications#BaseNotification',
          DistributionPartner: '../modules/partners#BasePartner',
          Partner: '../modules/partners#BasePartner',
        },
      },
      presetConfig: {
        baseTypesPath: '../generated/schema-types.ts',
        filename: 'generated/module-types.ts',
      },
      plugins: [
        { add: { content: '/* eslint-disable */' } },
        'typescript',
        'typescript-resolvers',
      ],
    },
  },
};

export default config;
